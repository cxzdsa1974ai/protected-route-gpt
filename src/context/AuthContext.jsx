import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  // Load stored user on app start
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      navigate('/profile')
    }
  }, [])


  const login = (username) => {
    const newUser = { name: username }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser)) // ✅ store in localStorage
    navigate('/profile')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user') // ✅ remove on logout
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
