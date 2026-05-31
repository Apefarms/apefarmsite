import { useState } from 'react';
import toast from 'react-hot-toast';

import { PRODUCTS, WEIGHTS } from '../constants/products';

const ProductCard = ({ product, onAddToCart, isLoggedIn, onOpenRegister }) => {
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-[2rem] p-4 border border-black/5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] flex flex-col">
      {/* Top Image Section */}
      <div className={`relative w-full aspect-[4/3] rounded-[1.5rem] ${product.color} flex items-center justify-center p-6`}>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 right-4 w-[2.5rem] h-[2.5rem] bg-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-90 z-10 group/like"
          aria-label="Like product"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={isLiked ? "#ef4444" : "white"} 
            stroke={isLiked ? "#ef4444" : "#cbd5e1"} 
            className={`w-5 h-5 translate-y-[1px] transition-colors duration-200 ${!isLiked ? 'group-hover/like:stroke-red-400' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
        <img src={product.img} alt={product.name} className="w-full h-full object-contain drop-shadow-2xl" />
      </div>

      {/* Product Info */}
      <div className="mt-5 px-1 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-xl font-bold text-neutral-900 tracking-tight">{product.name}</h3>
          <span className="text-sm font-bold text-neutral-900">{product.price}</span>
        </div>
        <p className="mt-1 text-sm text-neutral-600 leading-snug">{product.desc}</p>

        {/* Weights */}
        <div className="mt-6 mb-2">
          <div className="text-sm font-bold text-neutral-900 mb-3">Select Weight</div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2">
              {WEIGHTS.map(weight => (
                <button
                  key={weight}
                  onClick={() => {
                    setSelectedWeight(weight);
                    setQuantity(1); // Reset quantity when weight category changes
                  }}
                  className={`py-1.5 px-4 rounded-full text-xs font-semibold border transition-all ${
                    selectedWeight === weight 
                    ? 'bg-[#d85c27] border-[#d85c27] text-white shadow-sm' 
                    : 'bg-white border-[#d4b998] text-neutral-700 hover:border-[#d85c27] hover:text-[#d85c27]'
                  }`}
                >
                  {weight}
                </button>
              ))}
            </div>

            {/* Quantity Selector - Visible only when weight is selected */}
            {selectedWeight && (
              <div className="ml-auto flex items-center border border-neutral-200 rounded-full px-2 py-0.5 bg-white shadow-sm animate-in fade-in slide-in-from-right-2 duration-300">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-[#d85c27] transition-colors font-medium text-lg"
                >
                  −
                </button>
                <span className="w-8 text-center text-[13px] font-bold text-neutral-800">{quantity}</span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-[#d85c27] transition-colors font-medium text-lg"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Add to Cart */}
        <div className="mt-6 flex-1 flex items-end">
          <button 
            onClick={() => {
              // 1. Check if user is logged in
              if (!isLoggedIn) {
                toast.error("Please login before adding to cart", {
                  duration: 2500,
                  icon: '🔑',
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                });
                onOpenRegister?.(); // Open the login/signup popup
                return;
              }

              // 2. Check if weight is selected
              if (!selectedWeight) {
                toast.error("Select weight options before adding to cart", {
                  duration: 2000,
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                });
                return;
              }

              // 3. Add to cart
              onAddToCart?.(product, selectedWeight, quantity);
              toast.success(`Added ${quantity} ${product.name} (${selectedWeight}) to cart!`, {
                duration: 2000,
              });
            }}
            className="w-full bg-[#416a24] hover:bg-[#32521c] text-white font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
          >
            Add to Cart
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 -mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Order({ onAddToCart, isLoggedIn, onOpenRegister }) {
  return (
    <section id="order" className="scroll-mt-24 bg-[#fffdf8] py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600 mb-3">
            Our Offerings
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Choose your mango flavor.
          </h2>
        </div>

        {/* Product Cards Grid: max 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {PRODUCTS.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
              isLoggedIn={isLoggedIn}
              onOpenRegister={onOpenRegister}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
