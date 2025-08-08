import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple hardcoded validation
    if (username === 'vijayan' && password === '123456') {
      login(username)
      navigate('/profile')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="p-4">
      <h2 className="mb-4">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-1 w-64"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-1 w-64"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
