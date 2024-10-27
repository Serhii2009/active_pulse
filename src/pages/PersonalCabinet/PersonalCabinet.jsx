import { useAuth } from '../../contexts/AuthContext'

const PersonalCabinet = () => {
  const { logout } = useAuth()

  return (
    <div>
      <p>PersonalCabinet</p>
      <button onClick={logout}>Log Out</button>
    </div>
  )
}

export default PersonalCabinet
