import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Preloader from './components/Preloader'
import Layout from './components/Layout'
import Home from './pages/Home'
import SavedNews from './pages/SavedNews'
import SearchResults from './pages/SearchResults'

export default function App() {
  const [storedCards, setStoredCards] = useState([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem('searchResults')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) {
          setStoredCards(parsed)
        }
      }
    } catch (e) {
      // ignore storage errors
    }
  }, [])

  return (
    <>
      <Preloader />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="saved-news" element={<SavedNews />} />
        </Route>
      </Routes>
    </>
  )
}