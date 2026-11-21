import { NavLink, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import unionIcon from '../images/icon/Union.svg'
import unionIconMobile from '../images/icon/Union1.svg'
import menuIcon from '../images/icon/menu.svg'
import menuIconSaved from '../images/icon/menu2.svg'
import closeIcon from '../images/icon/close.svg'

export default function Navigation({ onSigninClick, menuOpen, setMenuOpen }) {
  const { isAuthenticated, user, setUser } = useAppContext()
  const displayName = user?.name || (user?.email ? user.email.split('@')[0] : 'Elise')
  const location = useLocation()
  const isSavedNews = location.pathname === '/saved-news'

  const handleLogout = () => {
    setUser(null)
    setMenuOpen(false)
  }

  return (
    <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''} ${isSavedNews ? 'navbar__menu--active' : ''}`}>
      <button
        type="button"
        className="navbar__toggle"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Menú"
      >
        <img src={menuOpen ? closeIcon : (isSavedNews ? menuIconSaved : menuIcon)} alt="Menú" />
      </button>
      <ul className="navbar__links">
        <li>
          <NavLink to="/" end className="navbar__inicio" onClick={() => setMenuOpen(false)}>
            Inicio
            <span className="navbar__inicio-bar" />
          </NavLink>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <NavLink to="/saved-news" className="navbar__saved-news" onClick={() => setMenuOpen(false)}>
                Artículos guardados
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="navbar__user"
                onClick={handleLogout}
              >
                <span className="navbar__signin-text">{displayName}</span>
                <div className="navbar__user-icon">
                  <img className="icon-desktop" src={unionIcon} alt="Elise" />
                  <img className="icon-mobile" src={unionIconMobile} alt="Elise" />
                </div>
              </button>
            </li>
          </>
        )}
        {!isAuthenticated && (
          <li>
            <button
              type="button"
              className="navbar__signin"
              aria-label="Iniciar sesión"
              onClick={() => {
                setMenuOpen(false)
                onSigninClick()
              }}
            >
              <span className="navbar__signin-text"></span>
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}
