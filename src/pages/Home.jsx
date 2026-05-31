import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Gallery from '../components/Gallery.jsx'
import Order from '../components/Order.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import WhatsApp from '../components/whatsapp.jsx'
import Register from './Register.jsx'
import Cart from '../components/Cart.jsx'
import { Toaster } from 'react-hot-toast'
import { clearSession, getToken, getUser } from '../utils/api'
import { verifySession } from '../utils/auth'
import { addToCartApi, getCartItemsApi, removeFromCartApi } from '../utils/productApi'
import { PRODUCTS } from '../constants/products'

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const handleAddToCart = async (product, weight, initialQuantity = 1) => {
    // 1. Update UI state locally for immediate feedback
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.weight === weight);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.weight === weight) 
            ? { ...item, quantity: item.quantity + initialQuantity } 
            : item
        );
      }
      return [...prev, { ...product, weight, quantity: initialQuantity }];
    });

    // 2. Persist to database if logged in
    if (isLoggedIn) {
      try {
        await addToCartApi({
          variety: product.name,
          weight_category: weight,
          quantity: initialQuantity,
        });
        console.log('Cart persisted to database');
      } catch (err) {
        console.error('Failed to persist cart:', err.message);
        // Optionally show an error toast here if the UI update should be reverted
      }
    }
  }

  const updateQuantity = (id, weight, newQty) => {
    if (newQty < 1) return;
    setCartItems(prev => prev.map(item => 
      (item.id === id && item.weight === weight) ? { ...item, quantity: newQty } : item
    ));
  }

  const removeItem = async (id, weight) => {
    // 1. Find the item to get its name/variety for the API call
    const itemToRemove = cartItems.find(item => item.id === id && item.weight === weight);
    
    // 2. Local state update
    setCartItems(prev => prev.filter(item => !(item.id === id && item.weight === weight)));

    // 3. Database sync
    if (isLoggedIn && itemToRemove) {
      try {
        await removeFromCartApi(itemToRemove.name, weight);
        console.log('Item removed from database');
      } catch (err) {
        console.error('Failed to remove item from database:', err.message);
      }
    }
  }

  const fetchCart = async () => {
    try {
      const dbItems = await getCartItemsApi();
      const fullItems = dbItems.map(dbItem => {
        const product = PRODUCTS.find(p => p.name === dbItem.variety);
        if (!product) return null;
        return {
          ...product,
          weight: dbItem.weight_category,
          quantity: dbItem.quantity
        };
      }).filter(Boolean);
      setCartItems(fullItems);
    } catch (err) {
      console.error('Failed to fetch cart:', err);
    }
  };

  // Restore session on page load / refresh
  useEffect(() => {
    const token = getToken()
    const user = getUser()

    // Step 1: Instantly restore from localStorage (no network delay)
    if (token && user) {
      setIsLoggedIn(true)
      setUserName(user.name || '')
      fetchCart(); // Fetch cart for the existing session
    }

    // Step 2: Verify with backend in background (catches expired tokens)
    if (token) {
      verifySession().then((result) => {
        if (!result.valid) {
          // Token expired or invalid — log user out
          setIsLoggedIn(false)
          setUserName('')
          setCartItems([]) // Clear cart on logout
          clearSession()
        }
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={userName}
        cartCount={cartCount}
        onLogout={() => {
          setIsLoggedIn(false)
          setUserName('')
          setCartItems([]) // Clear cart locally
          clearSession() // Remove JWT + user from localStorage
        }}
      />
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Order 
          onAddToCart={handleAddToCart} 
          isLoggedIn={isLoggedIn}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />

      <Register
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onLoginSuccess={(name) => {
          setIsLoggedIn(true)
          setUserName(name)
          fetchCart() // Sync cart from DB on login
        }}
      />
    </div>
  )
}
