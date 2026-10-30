import githubIcon from '../images/icon/Vector.svg'
import facebookIcon from '../images/social/iconmonstr-facebook-6.svg'

export default function Footer() {
  return (
    <footer className="app-footer">
      <p className="app-footer__copyright">
        © {new Date().getFullYear()} Proyecto 20 — Desarrollo Web (TripleTen)
      </p>
      <nav className="app-footer__menu">
        <a href="/">Inicio</a>
        <a href="/practicum">Practicum</a>
      </nav>
      <div className="app-footer__icons">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
      </div>
    </footer>
  )
}