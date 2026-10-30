import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import NewsCardList from '../components/NewsCardList'
import Preloader from '../components/Preloader'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default function Home() {
  const [searchParams] = useSearchParams()
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (query) => {
    if (!query || !query.trim()) return
    setIsLoading(true)
    setError('')
    setHasSearched(true)
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(query.toLowerCase())}`
      )
      if (!res.ok) {
        throw new Error(`Pokémon no encontrado: ${res.status}`)
      }
      const data = await res.json()
      const mapped = [
        {
          id: data.id || data.name,
          title: data.name,
          text: `Tipos: ${(data.types || [])
            .map((t) => t.type?.name)
            .join(', ')} | Habilidades: ${(data.abilities || [])
            .map((a) => a.ability?.name)
            .join(', ')}`,
          date: '',
          source: 'PokeAPI',
          image: data.sprites?.front_default,
          url: `https://pokeapi.co/api/v2/pokemon/${data.name}`,
          isSaved: false,
        },
      ]
      setCards(mapped)
    } catch (err) {
      setError(err.message || 'Ocurrió un error al buscar')
      setCards([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) {
      handleSearch(q)
    }
  }, [searchParams])

  const handleSave = async (card) => {
    try {
      const res = await fetch(`${API_BASE}/articles`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: card.title,
          text: card.text,
          date: card.date,
          source: card.source,
          image: card.image,
          link: card.url,
        }),
      })
      if (!res.ok) throw new Error('No se pudo guardar el artículo')
      setCards((prev) =>
        prev.map((c) => (c.id === card.id ? { ...c, isSaved: true } : c))
      )
    } catch (err) {
      setError(err.message || 'Error al guardar el artículo')
    }
  }

  return (
    <>
      {isLoading && <Preloader />}
      {error && <p className="home__error">{error}</p>}
      {!isLoading && hasSearched && cards.length > 0 && (
        <NewsCardList cards={cards} onSave={handleSave} />
      )}
      {!isLoading && hasSearched && cards.length === 0 && !error && (
        <p className="home__empty">No hay resultados</p>
      )}
    </>
  )
}