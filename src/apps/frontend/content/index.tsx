import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"

interface Place {
  id: number
  name: string
  image: string
  category: string
  distance_from_nashik_km: number
  description: string
}

type Props = {
  place: Place
}

const PlaceCard: React.FC<Props> = ({ place }) => {
  return (
    <>
      <div className="mt-10 mx-5 mb-6">
        <h2 className="text-xl font-bold">Nearby Places</h2>
      </div>
      <Card className="w-80 mx-5 border border-black rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
        <img alt={place.name} src={place.image} className="w-full h-48 object-cover" />
        <CardContent>
          <Badge variant="orange">{place.category}</Badge>
          <h3 className="text-base font-semibold mt-2">{place.name}</h3>
          <p className="text-sm text-muted-foreground">
            {place.distance_from_nashik_km} km from Nashik
          </p>
          <p className="text-sm mt-2 line-clamp-2">{place.description}</p>
          <Button className="w-full mt-4 bg-black hover:bg-gray-800">View Details</Button>
        </CardContent>
      </Card>
    </>
  )
}

export default PlaceCard
