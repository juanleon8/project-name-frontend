import NewsCard from './NewsCard'

export default function NewsCardList({ cards = [], onSave, onDelete }) {
  return (
    <section className="news-card-list">
      {cards.map((card) => (
        <NewsCard
          key={card.id || card.url}
          title={card.title}
          text={card.text || card.description}
          date={card.date || card.publishedAt}
          source={card.source?.name || card.source}
          image={card.image || card.urlToImage}
          isSaved={card.isSaved}
          onSave={() => onSave && onSave(card)}
          onDelete={() => onDelete && onDelete(card)}
        />
      ))}
    </section>
  )
}