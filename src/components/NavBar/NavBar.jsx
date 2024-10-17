import './NavBar.css'
import { assets } from '../../assets/assets'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-box">
        <img
          src={assets.logo_desctop}
          alt=""
          className="nav-bar-logo-desctop"
        />
        <img src={assets.logo_mobile} alt="" className="nav-bar-logo-mobile" />

        <ul className="nav-bar-list">
          <li className="nav-bar-list-element">Training programs</li>
          <li className="nav-bar-list-element">News and articles</li>
          <li className="nav-bar-list-element">FAQ</li>
        </ul>

        <div className="nav-bar_cta">
          <div className="nav-bar-buttons">
            <div className="nav-bar-sign-up">Sign Up</div>
            <div className="nav-bar-log-in">Log In</div>
          </div>
          <img src={assets.side_menu} alt="" className="nav-bar-side-menu" />
        </div>
      </div>
    </div>
  )
}

export default NavBar
