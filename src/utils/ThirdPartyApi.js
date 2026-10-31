const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || '259c8c3a82824d22a6c7e143daf4796e'
const NEWS_API = 'https://newsapi.org/v2'

class ThirdPartyApi {
  static async getNews(query) {
    if (!NEWS_API_KEY) {
      throw new Error('Falta la clave de API de NewsAPI (VITE_NEWS_API_KEY)')
    }
    const now = new Date()
    const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const formatDate = (d) => d.toISOString().split('T')[0]
    const response = await fetch(
      `${NEWS_API}/everything?q=${encodeURIComponent(
        query
      )}&from=${formatDate(from)}&to=${formatDate(now)}&language=es&sortBy=publishedAt&pageSize=100&apiKey=${NEWS_API_KEY}`
    )
    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`)
    }
    const data = await response.json()
    if (data.status !== 'ok') {
      throw new Error(data.message || 'Error al obtener noticias')
    }
    return data.articles || []
  }

  static async saveArticle(article) {
    const response = await fetch(`${API_BASE}/articles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    })
    if (!response.ok) {
      throw new Error('No se pudo guardar el artículo')
    }
    return response.json()
  }

  static async deleteArticle(id) {
    const response = await fetch(`${API_BASE}/articles/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error('No se pudo eliminar el artículo')
    }
    return response.json().catch(() => ({}))
  }

  static async getSavedArticles() {
    const response = await fetch(`${API_BASE}/articles`)
    if (!response.ok) {
      throw new Error('No se pudieron obtener los artículos guardados')
    }
    return response.json()
  }
}

export default ThirdPartyApi