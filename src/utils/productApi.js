import { getToken } from './api'

// const API_BASE = 'http://localhost:5000'
const API_BASE = 'https://api.apefarms.in'

/**
 * Add a product variety and weight to the user's cart in the database.
 * @param {Object} productDetails - { variety, weight_category, quantity }
 */
export async function addToCartApi(productDetails) {
  const token = getToken()
  if (!token) throw new Error("No authorization token found")

  const response = await fetch(`${API_BASE}/api/products/add-to-cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productDetails),
  })

  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Failed to add to cart')

  return data
}

export async function getCartItemsApi() {
  const token = getToken()
  if (!token) throw new Error("No authorization token found")

  const response = await fetch(`${API_BASE}/api/products/cart-items`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Failed to fetch cart items')

  return data
}

export async function removeFromCartApi(variety, weight_category) {
  const token = getToken()
  if (!token) throw new Error("No authorization token found")

  const response = await fetch(`${API_BASE}/api/products/remove-item`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ variety, weight_category }),
  })

  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Failed to remove from cart')

  return data
}
