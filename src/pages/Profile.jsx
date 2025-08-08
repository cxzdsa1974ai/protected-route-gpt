import { useAuth } from '../context/AuthContext'

function Profile() {
  const { user } = useAuth()

  return (
    <div className="p-4">
      <h2>Welcome, {user.name}!</h2>
      <p>This is your profile page.</p>
    </div>
  )
}

export default Profile
