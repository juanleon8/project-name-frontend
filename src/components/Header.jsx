import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Input from './ui/Input'
import Button from './ui/Button'
import Navigation from './Navigation'

export default function Header() {
  const [query, setQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)

  const [signinEmail, setSigninEmail] = useState('')
  const [signinEmailError, setSigninEmailError] = useState('')
  const [signinPassword, setSigninPassword] = useState('')

  const [signupEmail, setSignupEmail] = useState('')
  const [signupEmailError, setSignupEmailError] = useState('')
  const [signupEmailUnavailable, setSignupEmailUnavailable] = useState(false)
  const [signupPassword, setSignupPassword] = useState('')
  const [signupUsername, setSignupUsername] = useState('')

  const closeSignin = () => {
    setIsModalOpen(false)
    setSigninEmail('')
    setSigninEmailError('')
    setSigninPassword('')
  }

  const closeSignup = () => {
    setIsSignupOpen(false)
    setSignupEmail('')
    setSignupEmailError('')
    setSignupEmailUnavailable(false)
    setSignupPassword('')
    setSignupUsername('')
  }

  const closeSuccess = () => {
    setIsSuccessOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <NavLink to="/" className="navbar__brand-link">
            NewsExplorer
          </NavLink>
        </div>
        <Navigation onSigninClick={() => setIsModalOpen(true)} />
      </div>
      <div className="header__hero">
        <h1 className="hero__title">
          ¿Que esta pasando en el mundo ?
        </h1>
        <p className="hero__subtitle">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
          cuenta personal.
        </p>
        <div className="search-bar">
          <input
            className="search-bar__input"
            type="text"
            placeholder="introduce un tema"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-bar__button" type="button">
            Buscar
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={closeSignin}
        >
          <div className="modal modal--signin" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              onClick={closeSignin}
            >
              ×
            </button>
            <h2 className="modal__title">Iniciar sesión</h2>
            <Input
              label="Correo electrónico"
              type="email"
              placeholder="introduce tu correo electrónico"
              value={signinEmail}
              onChange={(e) => {
                const value = e.target.value
                setSigninEmail(value)
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  setSigninEmailError('Dirección de correo electrónico no válido')
                } else {
                  setSigninEmailError('')
                }
              }}
              error={signinEmailError}
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="introduce tu contraseña"
              value={signinPassword}
              onChange={(e) => setSigninPassword(e.target.value)}
            />
            <Button
              variant="primary"
              className="modal__button modal__button--signin"
              disabled={!signinEmail || !!signinEmailError || !signinPassword}
            >
              <span className="modal__button-text">Iniciar sesión</span>
            </Button>
            <p className="modal__signup">
              <span className="modal__signup-o">o </span>
              <span
                className="modal__signup-link"
                onClick={() => {
                  closeSignin()
                  setIsSignupOpen(true)
                }}
              >
                inscribirse
              </span>
            </p>
          </div>
        </div>
      )}

      {isSignupOpen && (
        <div
          className="modal-backdrop"
          onClick={closeSignup}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              onClick={closeSignup}
            >
              ×
            </button>
            <h2 className="modal__title">Inscribirse</h2>
            <Input
              label="Correo electrónico"
              type="email"
              placeholder="introduce tu correo electrónico"
              value={signupEmail}
              onChange={(e) => {
                const value = e.target.value
                setSignupEmail(value)
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  setSignupEmailError('Dirección de correo electrónico no válido')
                  setSignupEmailUnavailable(false)
                } else {
                  setSignupEmailError('')
                  // Simulación de correo ya registrado (reemplazar con llamada a API)
                  setSignupEmailUnavailable(value === 'taken@test.com')
                }
              }}
              error={signupEmailError}
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="introduce tu contraseña"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <Input
              label="Nombre de usuario"
              placeholder="introduce tu nombre de usuario"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
            />
            {signupEmailUnavailable && (
              <p className="modal__email-unavailable">
                Este correo electrónico no está disponible
              </p>
            )}
            <Button
              variant="primary"
              className="modal__button"
              disabled={!signupEmail || !!signupEmailError || !signupPassword || !signupUsername || signupEmailUnavailable}
              onClick={() => {
                closeSignup()
                setIsSuccessOpen(true)
              }}
            >
              <span className="modal__button-text">Inscribirse</span>
            </Button>
            <p className="modal__signup">
              <span className="modal__signup-o">o </span>
              <span
                className="modal__signup-link"
                onClick={() => {
                  closeSignup()
                  setIsModalOpen(true)
                }}
              >
                iniciar sesión
              </span>
            </p>
          </div>
        </div>
      )}

      {isSuccessOpen && (
        <div
          className="modal-backdrop"
          onClick={closeSuccess}
        >
          <div className="modal modal--success" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              onClick={closeSuccess}
            >
              ×
            </button>
            <h2 className="modal__success-title">
              ¡El registro se ha completado con éxito!
            </h2>
            <p
              className="modal__success-nav"
              onClick={() => {
                closeSuccess()
                setIsModalOpen(true)
              }}
            >
              Iniciar sesión
            </p>
          </div>
        </div>
      )}
    </header>
  )
}