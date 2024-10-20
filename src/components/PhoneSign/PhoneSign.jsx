import './PhoneSign.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const PhoneSign = () => {
  return (
    <div className="phone-sign">
      <div className="phone-sign-container">
        <Link to="/">
          <img
            src={assets.sign_form_close}
            alt=""
            className="phone-sign_form_close"
          />
        </Link>
        <p className="phone-sign-container-title">Sign up</p>
        <p className="phone-sign-container-description">
          Signing up with a registered phone number or social account will log
          you into your Traveler account
        </p>

        <div className="phone-sign-container-chose-list">
          <Link to="/signup">
            <div className="phone-sign-container-chose-email">
              Email address
            </div>
          </Link>
          <div className="phone-sign-container-chose-phone">Phone number</div>
        </div>

        <div className="phone-sign-container-form">
          <input
            type="name"
            placeholder="Name"
            className="phone-sign-container-form-name"
          />

          <input
            type="text"
            placeholder="+000"
            className="phone-sign-container-form-country-num"
          />

          <input
            type="text"
            placeholder="000000000"
            className="phone-sign-container-form-personal-num"
          />

          <input
            type="password"
            placeholder="Send verification code"
            className="phone-sign-container-form-varify"
          />

          <div className="phone-sign-container-form-button">Sign up</div>
        </div>
        <p className="phone-sign-container-policy">
          By creating an account, you accept our <span>Terms of Service</span>{' '}
          and <span>Privacy Policy.</span>
        </p>
        <p className="phone-sign-container-login">
          Already have an account?{' '}
          <Link to="/login">
            <span>Log in</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default PhoneSign
