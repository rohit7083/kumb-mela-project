import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin, Users } from "lucide-react"

function KumbhMela() {
  const schedule = [
    {
      date: "31 Oct 2026",
      title: "Dhwajarohan (Flag Hoisting)",
      desc: "The Simhastha Kumbh Mela begins with a ceremonial flag hoisting at Ramkund, Nashik and Trimbakeshwar."
    },
    {
      date: "29 July 2027",
      title: "Nagar Parikrama",
      desc: "Devotees and saints perform a sacred procession around Nashik city."
    },
    {
      date: "2 Aug 2027",
      title: "First Amrit Snan",
      desc: "First holy dip in the Godavari river during Ashadha Amavasya."
    },
    {
      date: "31 Aug 2027",
      title: "Second Amrit Snan",
      desc: "Shravan Amavasya holy dip attended by millions of devotees."
    },
    {
      date: "11 Sep 2027",
      title: "Third Amrit Snan",
      desc: "Bhadrapada Ekadashi holy dip at Ramkund Nashik."
    },
    {
      date: "24 July 2028",
      title: "Conclusion Ceremony",
      desc: "Official conclusion of the Simhastha Kumbh Mela."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">

      {/* HERO SECTION */}
      <section className="text-center space-y-4">
        <Badge className="bg-orange-500 text-white">World's Largest Spiritual Gathering</Badge>

        <h1 className="text-4xl md:text-6xl font-bold">
          Nashik Kumbh Mela
        </h1>

        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          The Nashik–Trimbakeshwar Simhastha Kumbh Mela is one of the largest
          religious gatherings in the world. Millions of devotees visit Nashik
          to take a sacred bath in the holy Godavari River believing that it
          cleanses sins and brings spiritual liberation.
        </p>
      </section>

      {/* INFORMATION SECTION */}
      <section className="grid md:grid-cols-3 gap-6">

        <Card>
          <CardContent className="p-6 space-y-2">
            <MapPin className="text-orange-500"/>
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-sm text-muted-foreground">
              The festival takes place at Ramkund in Nashik and
              Kushavart Kund in Trimbakeshwar where the Godavari River originates.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <CalendarDays className="text-orange-500"/>
            <h3 className="font-semibold text-lg">Occurs Every 12 Years</h3>
            <p className="text-sm text-muted-foreground">
              The Kumbh Mela is organized every 12 years based on planetary
              positions when Jupiter enters Leo (Simha).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <Users className="text-orange-500"/>
            <h3 className="font-semibold text-lg">Millions of Pilgrims</h3>
            <p className="text-sm text-muted-foreground">
              The last Nashik Kumbh Mela in 2015 attracted over 30 million pilgrims
              from India and across the world.
            </p>
          </CardContent>
        </Card>

      </section>

      {/* TIMELINE SECTION */}
      <section className="space-y-6">

        <h2 className="text-3xl font-semibold text-center">
          Kumbh Mela Timeline
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {schedule.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <CardContent className="p-6 space-y-2">
                <p className="text-sm text-orange-500 font-medium">{event.date}</p>
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.desc}</p>
              </CardContent>
            </Card>
          ))}

        </div>

      </section>

      {/* RITUALS SECTION */}
      <section className="space-y-6">

        <h2 className="text-3xl font-semibold text-center">
          Major Rituals of Kumbh Mela
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Shahi Snan</h3>
              <p className="text-sm text-muted-foreground">
                The royal bath where saints and akhadas lead massive processions
                before taking the holy dip in the Godavari River.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Akhada Procession</h3>
              <p className="text-sm text-muted-foreground">
                Various Hindu ascetic groups march with flags,
                elephants, and chariots during the sacred procession.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Holy Dip</h3>
              <p className="text-sm text-muted-foreground">
                Devotees believe bathing in the Godavari River
                during Kumbh Mela removes sins and grants moksha.
              </p>
            </CardContent>
          </Card>

        </div>

      </section>

      {/* TRAVEL INFO */}
      <section className="space-y-4 text-center">

        <h2 className="text-3xl font-semibold">
          Visiting Nashik During Kumbh Mela
        </h2>

        <p className="max-w-3xl mx-auto text-muted-foreground">
          Nashik is well connected by road and rail from Mumbai, Pune, and
          other major cities. During the Kumbh Mela, special transportation,
          temporary accommodation camps, and medical facilities are provided
          to handle millions of visitors.
        </p>

      </section>

    </div>
  )
}

export default KumbhMela