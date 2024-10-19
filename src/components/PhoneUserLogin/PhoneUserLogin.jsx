import './PhoneUserLogin.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const PhoneUserLogin = () => {
  return (
    <div className="phone-login">
      <div className="phone-login-container">
        <Link to="/">
          <img
            src={assets.sign_form_close}
            alt=""
            className="phone-login_form_close"
          />
        </Link>
        <p className="phone-login-container-title">Log in</p>
        <p className="phone-login-container-description">
          Logging in with an unregistered phone number or social account creates
          a new Traveler account
        </p>

        <div className="phone-login-container-chose-list">
          <Link to="/login">
            <div className="phone-login-container-chose-email">
              Email address
            </div>
          </Link>
          <div className="phone-login-container-chose-phone">Phone number</div>
        </div>

        <div className="phone-login-container-form">
          <input
            type="text"
            placeholder="+000"
            className="phone-login-container-form-country-num"
          />

          <input
            type="text"
            placeholder="000000000"
            className="phone-login-container-form-personal-num"
          />

          <input
            type="password"
            placeholder="Send verification code"
            className="phone-login-container-form-varify"
          />

          <div className="phone-login-container-form-button">Log in</div>
        </div>

        <p className="phone-login-container-login">
          No account yet? <a href="">Sing up</a>
        </p>
      </div>
    </div>
  )
}

export default PhoneUserLogin
