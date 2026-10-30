import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const stats = [
  { label: 'Usuarios', value: '1,284' },
  { label: 'Proyectos', value: '42' },
  { label: 'Tareas', value: '189' },
  { label: 'Completadas', value: '127' },
]

export default function Dashboard() {
  return (
    <section className="stack">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h1>Dashboard</h1>
        <Badge variant="success">En línea</Badge>
      </div>

      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <p className="stat__label">{s.label}</p>
            <p className="stat__value">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid-2">
        <Card title="Actividad reciente" subtitle="Últimas acciones del sistema">
          <ul style={{ margin: 0, paddingLeft: 'var(--sp-4)', color: 'var(--color-text)' }}>
            <li>Nuevo usuario registrado</li>
            <li>Proyecto actualizado</li>
            <li>Tarea completada</li>
          </ul>
        </Card>

        <Card title="Formulario de ejemplo" subtitle="Componentes de UI">
          <Input label="Nombre" placeholder="Tu nombre" />
          <Input label="Correo" type="email" placeholder="tu@correo.com" />
          <Button variant="primary">Guardar</Button>
        </Card>
      </div>
    </section>
  )
}