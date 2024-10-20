import './Sign.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Sign = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/register', { name, email, password }) // Передаємо об'єкт з даними
      .then((result) => {
        console.log(result)
        navigate('/login')
      })
      .catch((err) => console.log(err))
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

        <form className="sign-container-form" onSubmit={handleSubmit}>
          <input
            type="name"
            placeholder="Name"
            className="sign-container-form-name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            className="sign-container-form-email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="sign-container-form-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="sign-container-form-button" onClick={handleSubmit}>
            Sign up
          </div>
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
