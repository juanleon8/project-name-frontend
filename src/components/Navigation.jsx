import { NavLink } from 'react-router-dom'

export default function Navigation({ onSigninClick }) {
  return (
    <div className="navbar__menu">
      <ul className="navbar__links">
        <li>
          <NavLink to="/" end className="navbar__inicio">
            Inicio
            <span className="navbar__inicio-bar" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/saved-news" className="navbar__saved-news">
            Artículos guardados
          </NavLink>
        </li>
        <li>
          <button
            type="button"
            className="navbar__signin"
            onClick={onSigninClick}
          >
            <span className="navbar__signin-text">Iniciar sesión</span>
          </button>
        </li>
      </ul>
    </div>
  )
}