import SavedNewsHeader from '../components/SavedNewsHeader'
import NewsCardList from '../components/NewsCardList'

export default function SavedNews() {
  const savedCards = []
  return (
    <>
      <SavedNewsHeader username="Usuario" savedCount={savedCards.length} keyword="" />
      <NewsCardList cards={savedCards} />
    </>
  )
}