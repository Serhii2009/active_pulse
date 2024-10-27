import './Sign.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Sign = () => {
  const handleRegister = (event) => {
    event.preventDefault() // Запобігає перезавантаженню сторінки
    const formData = new FormData(event.target) // Отримує дані форми
    const values = Object.fromEntries(formData.entries()) // Конвертує в об’єкт
    console.log(values) // Виводить значення в консоль
  }

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

        <form className="sign-container-form" onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="sign-container-form-name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="sign-container-form-email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="sign-container-form-password"
            required
          />

          <button type="submit" className="sign-container-form-button">
            Sign up
          </button>
        </form>
        <p className="sign-container-policy">
          By creating an account, you accept our <span>Terms of Service</span>{' '}
          and <span>Privacy Policy.</span>
        </p>
        <p className="sign-container-login">
          Already have an account?{' '}
          <Link to="/login">
            <span>Log in</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Sign
