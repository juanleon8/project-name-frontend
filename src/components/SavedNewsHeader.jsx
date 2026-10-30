export default function SavedNewsHeader({ username, savedCount, keyword }) {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__subtitle">Artículos guardados</p>
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