import './UserLogin.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'

const UserLogin = () => {
  const { loginUser, loading, error } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const values = { email, password }
    console.log('Attempting login with values:', values)

    await loginUser(values)

    // Додамо перевірку на помилку або редірект на іншу сторінку після успішного входу
    if (!error) {
      navigate('/personal-cabinet') // Змінити на бажаний маршрут
    }
  }

  return (
    <div className="user-login">
      <div className="user-login-container">
        <Link to="/">
          <img
            src={assets.sign_form_close}
            alt=""
            className="user-login_form_close"
          />
        </Link>
        <p className="user-login-container-title">Log in</p>
        <p className="user-login-container-description">
          Logging in with an unregistered phone number or social account creates
          a new Traveler account
        </p>

        <div className="user-login-container-chose-list">
          <div className="user-login-container-chose-email">Email address</div>
          <Link to="/phone-login">
            <div className="user-login-container-chose-phone">Phone number</div>
          </Link>
        </div>

        <form className="user-login-container-form" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="user-login-container-form-email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="user-login-container-form-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="user-login-container-form-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        {error && <p className="user-login-error">{error}</p>}

        <p className="user-login-container-login">
          No account yet?{' '}
          <Link to="/signup">
            <span>Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default UserLogin
