import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import bookmarkIcon from '../images/icon/bookmark.svg'

export default function NewsCard({ title, text, date, source, image, isSaved, onSave, onDelete }) {
  const { isAuthenticated } = useAppContext()
  const [showTooltip, setShowTooltip] = useState(false)

  const handleSave = () => {
    if (!isAuthenticated) return
    if (isSaved) {
      onDelete && onDelete()
    } else {
      onSave && onSave()
    }
  }

  return (
    <article className="news-card">
      <div className="news-card__image-wrap">
        <img className="news-card__image" src={image} alt={title} />
        <button
          type="button"
          className={`news-card__save ${
            isSaved ? 'news-card__save--saved' : ''
          } ${!isAuthenticated ? 'news-card__save--inactive' : ''}`}
          onClick={handleSave}
          onMouseEnter={() => !isAuthenticated && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label={isSaved ? 'Eliminar' : 'Guardar'}
        >
          <img src={bookmarkIcon} alt="Guardar" />
        </button>
        {showTooltip && !isAuthenticated && (
          <span className="news-card__tooltip">
            Inicia sesión para guardar artículos
          </span>
        )}
      </div>
      <div className="news-card__content">
        <p className="news-card__date">{date}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </article>
  )
}