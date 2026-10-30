import { useState } from 'react'

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) onSearch(query)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="introduce un tema"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-form__button" type="submit">
        Buscar
      </button>
    </form>
  )
}