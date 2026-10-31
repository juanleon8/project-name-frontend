import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import NewsCardList from '../components/NewsCardList'
import Preloader from '../components/Preloader'
import ThirdPartyApi from '../utils/ThirdPartyApi'

const STORAGE_KEY = 'searchResults'

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const [cards, setCards] = useState([])
  const [visibleCount, setVisibleCount] = useState(3)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (query) => {
    if (!query || !query.trim()) return
    setIsLoading(true)
    setError('')
    setIsEmpty(false)
    setHasSearched(true)
    setVisibleCount(3)
    try {
      const articles = await ThirdPartyApi.getNews(query)
      const mapped = (articles || []).map((a, idx) => ({
        id: a.url || idx,
        title: a.title,
        text: a.description,
        date: a.publishedAt
          ? new Date(a.publishedAt).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })
          : '',
        source: a.source?.name,
        image: a.urlToImage,
        url: a.url,
        isSaved: false,
      }))
      setCards(mapped)
      if (mapped.length === 0) {
        setIsEmpty(true)
      } else {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped))
        } catch (e) {
          // ignore storage errors
        }
      }
    } catch (err) {
      setError(
        'Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde'
      )
      setCards([])
      setIsEmpty(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) {
      handleSearch(q)
    } else {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          const parsed = JSON.parse(stored)
          if (Array.isArray(parsed) && parsed.length > 0) {
            setCards(parsed)
            setHasSearched(true)
            setVisibleCount(3)
          }
        }
      } catch (e) {
        // ignore
      }
    }
  }, [searchParams])

  const handleSave = async (card) => {
    try {
      await ThirdPartyApi.saveArticle({
        title: card.title,
        text: card.text,
        date: card.date,
        source: card.source,
        image: card.image,
        link: card.url,
      })
      setCards((prev) =>
        prev.map((c) => (c.id === card.id ? { ...c, isSaved: true } : c))
      )
    } catch (err) {
      setError(
        'Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde'
      )
    }
  }

  const handleDelete = async (card) => {
    try {
      await ThirdPartyApi.deleteArticle(card.id)
      setCards((prev) =>
        prev.map((c) => (c.id === card.id ? { ...c, isSaved: false } : c))
      )
    } catch (err) {
      setError(
        'Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde'
      )
    }
  }

  const visibleCards = cards.slice(0, visibleCount)
  const hasMore = visibleCount < cards.length

  if (isLoading) return <Preloader />

  return (
    <div className="search-results">
      <h2 className="search-results__title">Resultados de la búsqueda</h2>
      {error && <p className="home__error">{error}</p>}
      {!isLoading && isEmpty && !error && (
        <p className="home__empty">No se ha encontrado nada</p>
      )}
      {!isLoading && cards.length > 0 && (
        <>
          <NewsCardList cards={visibleCards} onSave={handleSave} onDelete={handleDelete} />
          {hasMore && (
            <div className="show-more">
              <button
                type="button"
                className="show-more__button"
                onClick={() => setVisibleCount((v) => v + 3)}
              >
                ver más
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}