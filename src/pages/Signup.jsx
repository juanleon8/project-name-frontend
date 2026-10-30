import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <section className="auth">
      <h1 className="auth__title">Crear cuenta</h1>
      <p className="auth__subtitle">Únete a NewsExplorer.</p>
      <Card>
        <Input label="Nombre" placeholder="Tu nombre" />
        <Input label="Correo" type="email" placeholder="tu@correo.com" />
        <Input label="Contraseña" type="password" placeholder="••••••••" />
        <Button variant="primary" style={{ width: '100%' }}>
          Registrarse
        </Button>
        <p style={{ marginTop: 'var(--sp-4)', fontSize: 'var(--fs-sm)', color: 'var(--color-text-muted)' }}>
          ¿Ya tienes cuenta? <Link to="/signin">Inicia sesión</Link>
        </p>
      </Card>
    </section>
  )
}