import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const NavBar = () => {
  const [modal, setModal] = useState(false)
  const [userModal, setUserModal] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const modalRef = useRef(null) // Реф для модалки
  const userModalRef = useRef(null)
  const location = useLocation() // Отримуємо інформацію про поточний маршрут

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

  const closeUserModal = () => {
    setUserModal(false)
  }

  const closeModal = () => {
    setModal(false)
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
          <Link
            to={
              isAuthenticated
                ? location.pathname === '/personal-cabinet'
                  ? '/training-programs'
                  : '/personal-cabinet'
                : location.pathname === '/'
                ? '/training-programs'
                : '/'
            }
          >
            <li className="nav-bar-list-element">
              {isAuthenticated
                ? location.pathname === '/training-programs'
                  ? 'Personal Cabinet'
                  : location.pathname === '/personal-cabinet'
                  ? 'Training Programs'
                  : 'Home'
                : location.pathname === '/training-programs'
                ? 'Home'
                : 'Training Programs'}
            </li>
          </Link>
          <li className="nav-bar-list-element">News and Articles</li>
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
                <Link
                  onClick={closeModal}
                  to={location.pathname === '/' ? '/training-programs' : '/'}
                >
                  <li className="nav-bar-list-element">
                    {location.pathname === '/training-programs'
                      ? 'Home'
                      : location.pathname === '/'
                      ? 'Training Programs'
                      : isAuthenticated
                      ? 'Personal Cabinet'
                      : 'Home'}
                  </li>
                </Link>
                <li onClick={closeModal}>News and articles</li>
                <li onClick={closeModal}>FAQ</li>
              </div>
            </div>
          </div>
        )}

        {userModal && (
          <div className="user-modal" ref={userModalRef}>
            <div className="user-modal-content">
              <ul className="user-modal-list">
                <Link
                  onClick={closeUserModal}
                  to={
                    location.pathname === '/personal-cabinet'
                      ? '/training-programs'
                      : '/personal-cabinet'
                  }
                >
                  <li className="user-modal-list-hidden">
                    {location.pathname === '/training-programs'
                      ? 'Personal Cabinet'
                      : location.pathname === '/personal-cabinet'
                      ? 'Training Programs'
                      : 'Home'}
                  </li>
                </Link>
                <li onClick={closeUserModal}>Profile</li>
                <li onClick={closeUserModal}>Settings</li>
                <li
                  onClick={() => {
                    logout()
                    closeUserModal()
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
