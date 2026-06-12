import { useState } from 'react'
import { saveSession } from '../utils/api'

export default function Register({ isOpen, onClose, onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  })
  const [isLogin, setIsLogin] = useState(true)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null
  const API_BASE = 'http://44.222.172.166:5000'
  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    // Basic validation
    if (!formData.email || !formData.password) {
      setMessage('Please fill in email and password')
      return
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match')
      return
    }

    setLoading(true)

    try {
      // Change this line to target /auth exactly
      const res = await fetch('https://api.apefarms.in/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          name: isLogin ? '' : formData.name, // Send name only for signup
          isLogin: isLogin,
        }),
      })

      const data = await res.json()
      setMessage(data.message)

      if (data.success) {
        // Requested console logs
        if (isLogin) {
          console.log("hi " + formData.email.split('@')[0])
          // Save JWT token + user to localStorage for session persistence
          saveSession(data.token, data.user)
          onLoginSuccess(data.user.name) // Signal successful login with name
        } else {
          console.log("user created")
        }

        // Clear form fields
        setFormData({ email: '', password: '', confirmPassword: '', name: '' })

        setTimeout(() => {
          onClose() // close popup on success
        }, 1500)
      }
    } catch (err) {
      setMessage('Server error. Is backend running?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative w-full md:ml-6 max-w-[92vw] sm:max-w-[480px] md:max-w-[700px] aspect-[0.9] flex flex-col items-center justify-center">

        <div
          className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat pointer-events-none drop-shadow-2xl ms-4"
          style={{ backgroundImage: 'url("/img/login_mango_popup.webp")' }}
        />

        <div className="relative z-10 w-full md:mr-8 max-w-[200px] sm:max-w-[260px] md:max-w-[380px] flex flex-col items-center px-2 sm:px-4">

          <div className="mb-0 -mt-10 sm:-mt-16 transform translate-y-[-20%]">
            <div className="bg-white rounded-full p-0.5 shadow-md border-[3px] border-orange-500/20 overflow-hidden w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
              <img src="/img/logo.webp" alt="Logo" className="w-full h-full object-cover scale-110" />
            </div>
          </div>

          <h2 className="text-[13px] sm:text-[17px] md:text-[22px] font-bold text-center text-neutral-800 leading-tight mb-2 sm:mb-4 md:mb-6">
            Welcome to APE FARMS<br />
            <span className="text-[12px] sm:text-sm md:text-lg font-bold">- {isLogin ? 'Login' : 'Sign Up'}</span>
          </h2>

          <form className="w-full space-y-2 sm:space-y-3 md:space-y-3.5" onSubmit={handleSubmit}>

            {/* Name Field */}
            {!isLogin && (
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full text-xs sm:text-sm py-1 sm:py-1.5 pl-8 sm:pl-12 pr-3 sm:pr-4 bg-white border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-mango-400 focus:border-transparent text-neutral-800 shadow-sm placeholder:text-neutral-400"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            )}


            {/* Email Field */}
            <div className="relative">
              <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </span>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full text-xs sm:text-sm py-1 sm:py-1.5 pl-8 sm:pl-12 pr-3 sm:pr-4 bg-white border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-mango-400 focus:border-transparent text-neutral-800 shadow-sm placeholder:text-neutral-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </span>
              <input
                type="password"
                placeholder="Password"
                className="w-full text-xs sm:text-sm py-1 sm:py-1.5 pl-8 sm:pl-12 pr-3 sm:pr-4 bg-white border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-mango-400 focus:border-transparent text-neutral-800 shadow-sm placeholder:text-neutral-400"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* Confirm Password Field (Only for Sign Up) */}
            {!isLogin && (
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </span>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full text-xs sm:text-sm py-1 sm:py-1.5 pl-8 sm:pl-12 pr-3 sm:pr-4 bg-white border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-mango-400 focus:border-transparent text-neutral-800 shadow-sm placeholder:text-neutral-400"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            )}

            {/* Message */}
            {message && (
              <p className={`text-center text-sm font-medium ${message.includes('success') || message.includes('created')
                ? 'text-green-600'
                : 'text-red-500'
                }`}>
                {message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full text-xs sm:text-sm py-1 sm:py-1.5 bg-mango-500 hover:bg-mango-600 text-white font-bold rounded-full shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-1 sm:gap-2 mt-1 sm:mt-2 disabled:opacity-60"
            >
              {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Signup')}
              <span className="text-base sm:text-xl leading-none">🥭</span>
            </button>
          </form>

          <div className="mt-2 sm:mt-4 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setMessage('')
                setFormData({ email: '', password: '', confirmPassword: '', name: '' })
              }}
              className="text-[10px] sm:text-[13px] font-semibold text-mango-600 hover:text-mango-700 transition-colors underline underline-offset-4"
            >
              {isLogin ? "I don't have account" : "I already have account"}
            </button>

            {isLogin && (
              <button className="text-[12px] font-medium text-neutral-500 hover:text-mango-700 transition-colors hidden">
                Forgot Password?
              </button>
            )}
          </div>

          <div className="w-50% mt-6 hidden">
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-neutral-100 py-1.5 px-1 rounded-full shadow-md hover:bg-neutral-50 transition-all active:scale-[0.98]">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.27.81-.57z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-[14px] font-semibold text-neutral-600">Or sign in with Google</span>
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-[12%] right-[18%] bg-neutral-800/20 backdrop-blur-sm text-white p-1 rounded-full hover:bg-neutral-800/40 transition-all z-20"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
      </div>
    </div>
  )
}