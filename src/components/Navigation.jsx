import { NavLink, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import unionIcon from '../images/icon/Union1.svg'
import unionActiveIcon from '../images/icon/Union.svg'

export default function Navigation({ onSigninClick }) {
  const { isAuthenticated, setUser } = useAppContext()
  const location = useLocation()
  const isSavedNews = location.pathname === '/saved-news'

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className={`navbar__menu ${isSavedNews ? 'navbar__menu--active' : ''}`}>
      <ul className="navbar__links">
        <li>
          <NavLink to="/" end className="navbar__inicio">
            Inicio
            {!isSavedNews && <span className="navbar__inicio-bar" />}
          </NavLink>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <NavLink to="/saved-news" className="navbar__saved-news">
                Artículos guardados
                {isSavedNews && <span className="navbar__saved-bar" />}
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="navbar__user"
                onClick={handleLogout}
              >
                <span className="navbar__signin-text">Elise</span>
                <div className="navbar__user-icon">
                  <img
                    src={isSavedNews ? unionActiveIcon : unionIcon}
                    alt="Elise"
                  />
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
              onClick={onSigninClick}
            >
              <span className="navbar__signin-text">Iniciar sesión</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}