import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

const items = [
  { title: 'React 18', badge: 'Core', text: 'Componentes funcionales y hooks.' },
  { title: 'Vite', badge: 'Build', text: 'HMR instantáneo y build optimizado.' },
  { title: 'React Router v6', badge: 'Routing', text: 'Rutas anidadas y layouts.' },
  { title: 'Design tokens', badge: 'UI', text: 'Variables CSS y componentes base.' },
  { title: 'Context API', badge: 'State', text: 'Estado global ligero.' },
  { title: 'API service', badge: 'Data', text: 'Cliente fetch centralizado.' },
]

export default function Features() {
  return (
    <section>
      <h1>Características</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--sp-6)' }}>
        Todo lo necesario para arrancar un proyecto React moderno.
      </p>
      <div className="features">
        {items.map((it) => (
          <Card key={it.title} title={it.title} subtitle={it.text}>
            <Badge variant="primary">{it.badge}</Badge>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: 'var(--sp-8)', textAlign: 'center' }}>
        <Button variant="primary">Empezar ahora</Button>
      </div>
    </section>
  )
}