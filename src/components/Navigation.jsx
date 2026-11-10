import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import unionIcon from '../images/icon/Union1.svg'

export default function Navigation({ onSigninClick }) {
  const { isAuthenticated, setUser } = useAppContext()

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="navbar__menu">
      <ul className="navbar__links">
        <li>
          <NavLink to="/" end className="navbar__inicio">
            Inicio
            <span className="navbar__inicio-bar" />
          </NavLink>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <NavLink to="/saved-news" className="navbar__saved-news">
                Artículos guardados
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="navbar__signin"
                onClick={handleLogout}
              >
                <span className="navbar__signin-text">Elise</span>
                <div className="navbar__user-icon">
                  <img src={unionIcon} alt="Elise" />
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