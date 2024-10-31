import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const NavBar = () => {
  const [modal, setModal] = useState(false)
  const [userModal, setUserModal] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const modalRef = useRef(null) // Реф для модалки юзера
  const userModalRef = useRef(null)

  const toggleModal = () => {
    setModal(!modal)
  }

  const toggleUserModal = () => {
    setUserModal(!userModal) // Перемикає модальне вікно юзера
  }

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModal(false)
    }
    if (userModalRef.current && !userModalRef.current.contains(event.target)) {
      setUserModal(false)
    }
  }

  useEffect(() => {
    // Додаємо обробник подій
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Видаляємо обробник подій при розмонтуванні
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (!isAuthenticated) {
      setUserModal(false)
    }
  }, [isAuthenticated])
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
          <Link to="/training-programs">
            <li className="nav-bar-list-element">Training programs</li>
          </Link>
          <li className="nav-bar-list-element">News and articles</li>
          <li className="nav-bar-list-element">FAQ</li>
        </ul>

        <div className="nav-bar_cta">
          <div className="nav-bar-buttons">
            {isAuthenticated ? (
              <>
                <div className="nav-bar-your-programs">Your programs</div>

                <img
                  src={assets.user_icon}
                  alt="User Account"
                  className="nav-bar-user-icon"
                  onClick={toggleUserModal}
                />
              </>
            ) : (
              <>
                <Link to="/signup">
                  <div className="nav-bar-sign-up">Sign Up</div>
                </Link>
                <Link to="/login">
                  <div className="nav-bar-log-in">Log In</div>
                </Link>
              </>
            )}
          </div>

          {!isAuthenticated && (
            <img
              onClick={toggleModal}
              src={assets.side_menu}
              alt=""
              className="nav-bar-side-menu"
            />
          )}
        </div>

        {modal && (
          <div className="nav-bar-modal" ref={modalRef}>
            <div className="nav-bar-modal-component">
              <div className="nav-bar-modal-list">
                <li>Training programs</li>
                <li>News and articles</li>
                <li>FAQ</li>
              </div>
            </div>
          </div>
        )}

        {userModal && (
          <div className="user-modal" ref={userModalRef}>
            <div className="user-modal-content">
              <ul className="user-modal-list">
                <li>Profile</li>
                <li>Settings</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
