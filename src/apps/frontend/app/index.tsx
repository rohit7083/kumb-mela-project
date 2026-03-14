import Navbar from '../Navbar/index'
import { placeData } from "../content/data"
import PlaceCard from '../content/index'
import FooterIndex from '../footer/Footer'
import HeroBannerOne from '../hero-banner/BannerOne'

function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroBannerOne />
      <PlaceCard place={placeData} />
      <FooterIndex />
    </div>
  )
}

export default Index
