import { useEffect, useState } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className="preloader">
      <div className="preloader__spinner" />
      <p className="preloader__text">Cargando...</p>
    </div>
  )
}