// ── Token helpers ──────────────────────────────────────────
// Save token + user data after login
export const saveSession = (token, user) => {
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))
}

// Get token for API calls
export const getToken = () => localStorage.getItem('token')

// Get stored user data
export const getUser = () => {
  const raw = localStorage.getItem('user')
  return raw ? JSON.parse(raw) : null
}

// Remove token + user on logout
export const clearSession = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

// Check if user has an active token
export const hasSession = () => !!localStorage.getItem('token')