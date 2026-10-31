import { useState, useEffect } from 'react'
import SavedNewsHeader from '../components/SavedNewsHeader'
import NewsCardList from '../components/NewsCardList'
import Preloader from '../components/Preloader'
import ThirdPartyApi from '../utils/ThirdPartyApi'

export default function SavedNews() {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const data = await ThirdPartyApi.getSavedArticles()
        const mapped = (Array.isArray(data) ? data : data.articles || []).map(
          (a, idx) => ({
            id: a._id || a.id || idx,
            title: a.title,
            text: a.text,
            date: a.date,
            source: a.source,
            image: a.image,
            isSaved: true,
          })
        )
        setCards(mapped)
      } catch (err) {
        setError(
          'Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde'
        )
      } finally {
        setIsLoading(false)
      }
    }
    load()
  }, [])

  const handleDelete = async (card) => {
    try {
      await ThirdPartyApi.deleteArticle(card.id)
      setCards((prev) => prev.filter((c) => c.id !== card.id))
    } catch (err) {
      setError(
        'Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde'
      )
    }
  }

  if (isLoading) return <Preloader />

  return (
    <>
      {error && <p className="home__error">{error}</p>}
      <SavedNewsHeader
        username="Usuario"
        savedCount={cards.length}
        keyword=""
      />
      <NewsCardList cards={cards} onDelete={handleDelete} />
    </>
  )
}