import './Sign.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Sign = () => {
  return (
    <div className="sign">
      <div className="sign-container">
        <Link to="/">
          <img
            src={assets.sign_form_close}
            alt=""
            className="sign_form_close"
          />
        </Link>
        <p className="sign-container-title">Sign up</p>
        <p className="sign-container-description">
          Signing up with a registered phone number or social account will log
          you into your Traveler account
        </p>

        <div className="sign-container-chose-list">
          <div className="sign-container-chose-email">Email address</div>
          <Link to="/phone-signup">
            <div className="sign-container-chose-phone">Phone number</div>
          </Link>
        </div>

        <div className="sign-container-form">
          <input
            type="email"
            placeholder="Email address"
            className="sign-container-form-email"
          />
          <input
            type="password"
            placeholder="Password"
            className="sign-container-form-password"
          />

          <div className="sign-container-form-button">Sign up</div>
        </div>
        <p className="sign-container-policy">
          By creating an account, you accept our <span>Terms of Service</span>{' '}
          and <span>Privacy Policy.</span>
        </p>
        <p className="sign-container-login">
          Already have an account? <a href="">Log in</a>
        </p>
      </div>
    </div>
  )
}

export default Sign
