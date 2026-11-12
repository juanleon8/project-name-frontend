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
    try {
      const response = await fetch(`${API_BASE}/articles`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(article),
      })
      if (response.ok) {
        return response.json().catch(() => ({ ok: true }))
      }
    } catch (e) {
      // Backend no disponible: guardar en localStorage
    }
    try {
      const stored = JSON.parse(localStorage.getItem('savedArticles') || '[]')
      const newArticle = { ...article, _id: article.link || Date.now().toString() }
      if (!stored.some((a) => a.link === article.link)) {
        stored.push(newArticle)
      }
      localStorage.setItem('savedArticles', JSON.stringify(stored))
      return newArticle
    } catch (e) {
      throw new Error('No se pudo guardar el artículo')
    }
  }

  static async deleteArticle(id) {
    try {
      const response = await fetch(`${API_BASE}/articles/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        return response.json().catch(() => ({}))
      }
    } catch (e) {
      // Backend no disponible: eliminar de localStorage
    }
    try {
      const stored = JSON.parse(localStorage.getItem('savedArticles') || '[]')
      const filtered = stored.filter((a) => (a._id || a.id) !== id && a.link !== id)
      localStorage.setItem('savedArticles', JSON.stringify(filtered))
      return { ok: true }
    } catch (e) {
      throw new Error('No se pudo eliminar el artículo')
    }
  }

  static async getSavedArticles() {
    try {
      const response = await fetch(`${API_BASE}/articles`)
      if (response.ok) {
        const data = await response.json()
        return Array.isArray(data) ? data : data.articles || []
      }
    } catch (e) {
      // Backend no disponible: leer de localStorage
    }
    try {
      return JSON.parse(localStorage.getItem('savedArticles') || '[]')
    } catch (e) {
      return []
    }
  }
}

export default ThirdPartyApi