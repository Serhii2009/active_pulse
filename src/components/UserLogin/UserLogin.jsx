import './UserLogin.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import axios from 'axios'

const UserLogin = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const navigate = useNavigate()

  const handleLogin = (values) => {
    console.log(values)
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
            placeholder="Email address"
            className="user-login-container-form-email"
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="user-login-container-form-password"
            // onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div
            className="user-login-container-form-button"
            onClick={handleLogin}
          >
            Log in
          </div>
        </form>
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
