import TravelTips from '@/components/ui/TravelTips'
import { placeData } from '../content/data'
import PlaceCard from '../content/index'
import HeroBannerOne from '../hero-banner/BannerOne'

function Home() {
  return (
    <>
      <HeroBannerOne />
      <PlaceCard place={placeData} />
      <TravelTips/>
    </>
  )
}

export default Home
