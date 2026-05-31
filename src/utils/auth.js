import { getToken, clearSession } from './api'

// const API_BASE = 'http://localhost:5000'
const API_BASE = 'https://api.apefarms.in'

// Verify the stored token with the server
// Returns { valid: true, user: {...} } or { valid: false }
export async function verifySession() {
  const token = getToken()
  if (!token) return { valid: false }

  try {
    const res = await fetch(`${API_BASE}/auth/verify-session`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = await res.json()
    if (!data.valid) {
      clearSession() // token expired or invalid, clean up
    }
    return data
  } catch {
    return { valid: false }
  }
}