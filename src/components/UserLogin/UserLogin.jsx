import './UserLogin.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const UserLogin = () => {
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

        <div className="user-login-container-form">
          <input
            type="email"
            placeholder="Email address"
            className="user-login-container-form-email"
          />
          <input
            type="password"
            placeholder="Password"
            className="user-login-container-form-password"
          />

          <div className="user-login-container-form-button">Log in</div>
        </div>
        <p className="user-login-container-login">
          No account yet?{' '}
          <Link to="/signup">
            <span>Sing up</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default UserLogin
