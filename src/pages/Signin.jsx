import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <section className="auth">
      <h1 className="auth__title">Iniciar sesión</h1>
      <p className="auth__subtitle">Accede a tu cuenta de NewsExplorer.</p>
      <Card>
        <Input label="Correo" type="email" placeholder="tu@correo.com" />
        <Input label="Contraseña" type="password" placeholder="••••••••" />
        <Button variant="primary" style={{ width: '100%' }}>
          Entrar
        </Button>
        <p style={{ marginTop: 'var(--sp-4)', fontSize: 'var(--fs-sm)', color: 'var(--color-text-muted)' }}>
          ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
        </p>
      </Card>
    </section>
  )
}