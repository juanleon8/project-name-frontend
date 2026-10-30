import Card from '../components/ui/Card'

export default function About() {
  return (
    <section className="stack" style={{ maxWidth: 720, margin: '0 auto' }}>
      <h1>Acerca de</h1>
      <Card title="Proyecto 20" subtitle="Desarrollo Web — TripleTen">
        <p>
          Aplicación base en React + Vite con un sistema de diseño reutilizable.
          Sirve como punto de partida para el desarrollo del proyecto escolar.
        </p>
      </Card>
      <Card title="Stack" subtitle="Tecnologías">
        <ul style={{ margin: 0, paddingLeft: 'var(--sp-4)' }}>
          <li>React 18</li>
          <li>Vite</li>
          <li>React Router DOM v6</li>
          <li>CSS con design tokens</li>
        </ul>
      </Card>
    </section>
  )
}