import { Card, CardContent } from "@/components/ui/card";



// ✅ Nearby Places Component (FIXED)
 function NearbyPlaces() {
  const places = [
    {
      name: "Trimbakeshwar Temple",
      distance: "28 km",
      description: "One of the 12 Jyotirlingas dedicated to Lord Shiva.",
    },
    {
      name: "Sula Vineyards",
      distance: "15 km",
      description: "Famous vineyard known for wine tours and tastings.",
    },
    {
      name: "Anjaneri Hills",
      distance: "20 km",
      description: "Birthplace of Lord Hanuman, great for trekking.",
    },
    {
      name: "Pandavleni Caves",
      distance: "8 km",
      description: "Ancient Buddhist caves with scenic views.",
    },
  ];

  return (
    <div className="mt-16">
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Nearby Places Around Nashik
        </h2>
        <p className="text-muted-foreground">
          Explore popular destinations within 30 km of Nashik — perfect for
          short trips and weekend getaways.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {places.map((place, i) => (
          <Card
            key={i}
            className="rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <CardContent className="p-5">
              <h3 className="font-semibold text-lg mb-1">
                {place.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Distance: {place.distance}
              </p>
              <p className="text-sm text-muted-foreground">
                {place.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default NearbyPlaces;
// ✅