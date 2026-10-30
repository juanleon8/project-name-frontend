import { Routes, Route } from 'react-router-dom'
import Preloader from './components/Preloader'
import Layout from './components/Layout'
import Home from './pages/Home'
import SavedNews from './pages/SavedNews'

export default function App() {
  return (
    <>
      <Preloader />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="saved-news" element={<SavedNews />} />
        </Route>
      </Routes>
    </>
  )
}