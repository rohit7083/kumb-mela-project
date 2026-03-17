import HeroBaner from "./HeroBaner"
import { placeData } from '../../content/data'
import PlaceCard from '../../content/index'
function Tourism() {
  return (
    <>
  <HeroBaner/>
        <PlaceCard place={placeData} />

    </>
    
  )
}

export default Tourism