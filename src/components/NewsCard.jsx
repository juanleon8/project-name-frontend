export default function NewsCard({ title, text, date, source, image, isSaved, onSave, onDelete }) {
  return (
    <article className="news-card">
      <img className="news-card__image" src={image} alt={title} />
      <div className="news-card__content">
        <p className="news-card__date">{date}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
      <button
        type="button"
        className="news-card__action"
        onClick={isSaved ? onDelete : onSave}
      >
        {isSaved ? 'Eliminar' : 'Guardar'}
      </button>
    </article>
  )
}