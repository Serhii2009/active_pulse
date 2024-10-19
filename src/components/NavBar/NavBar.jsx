import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="nav-bar">
      <div className="nav-bar-box">
        <Link to="/">
          <img
            src={assets.logo_desctop}
            alt=""
            className="nav-bar-logo-desctop"
          />
          <img
            src={assets.logo_mobile}
            alt=""
            className="nav-bar-logo-mobile"
          />
        </Link>

        <ul className="nav-bar-list">
          <li className="nav-bar-list-element">Training programs</li>
          <li className="nav-bar-list-element">News and articles</li>
          <li className="nav-bar-list-element">FAQ</li>
        </ul>

        <div className="nav-bar_cta">
          <div className="nav-bar-buttons">
            <Link to="/signup">
              <div className="nav-bar-sign-up">Sign Up</div>
            </Link>

            <Link to="/login">
              <div className="nav-bar-log-in">Log In</div>
            </Link>
          </div>
          <img
            onClick={toggleModal}
            src={assets.side_menu}
            alt=""
            className="nav-bar-side-menu"
          />
        </div>

        {modal && (
          <div className="nav-bar-modal">
            <div className="nav-bar-modal-component">
              <div className="nav-bar-modal-list">
                <li>Training programs</li>
                <li>News and articles</li>
                <li>FAQ</li>
              </div>
              <img
                onClick={toggleModal}
                className="nav-bar-modal-close"
                src={assets.menu_bar_close}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
