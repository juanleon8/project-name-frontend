export default function SavedNewsHeader({ username, savedCount, keyword }) {
  return (
    <section className="saved-news-header">
      <h1 className="saved-news-header__title">
        {username}, tienes {savedCount} artículos guardados
      </h1>
      {keyword && (
        <p className="saved-news-header__keyword">
          Por palabras clave: {keyword}
        </p>
      )}
    </section>
  )
}