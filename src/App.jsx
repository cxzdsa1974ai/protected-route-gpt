import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import About from './pages/About'
import Contact from './pages/Contact'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
               path="/profile"
               element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
                }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
