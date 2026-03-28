import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { attractions } from "../nearByPlace/data";


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




  // Header content

const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all",
  );
  const [sortBy, setSortBy] = useState("rating");

  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  // loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  // sync from URL
  useEffect(() => {
    const s = searchParams.get("search") || "";
    const c = searchParams.get("category") || "all";
    setSearchQuery(s);
    setSelectedCategory(c);
  }, [searchParams]);

  // filtering
  const filtered = useMemo(() => {
    let result = [...attractions];

    if (debouncedQuery.trim()) {
      const q = debouncedQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q),
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((a) => a.category === selectedCategory);
    }

    result.sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    return result;
  }, [debouncedQuery, selectedCategory, sortBy]);




  return (

    
    <div className="mt-2">
       <div className="space-y-10">
            <div className=" bg-gray-50 dark:bg-gray-900">
              {/* Header */}
      
              {/* Header */}
              <div className="pt-10 pb-8 px-4 text-white bg-black">
                <div className="max-w-6xl mx-auto space-y-6">
                  {/* Badge */}
                  <div className="bg-white text-green-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                    Explore Nashik
                  </div>
      
                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                   Nearby Places Around Nashik 🌄
                  </h1>
      
                  {/* Subtitle */}
                  <p className="text-gray-300 text-lg max-w-2xl">
                    Explore popular destinations within 30 km of Nashik — perfect for
          short trips and weekend getaways. Find the best temples, vineyards, and hidden gems across Nashik
                    city.
                  </p>
      
                  {/* Search UI */}
                  <div className="flex gap-3 max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2">
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        🔍
                      </span>
      
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {
                          const value = e.target.value;
                          setSearchQuery(value);
                          setSearchParams({
                            search: value,
                            category: selectedCategory,
                          });
                        }}
                        placeholder="Search places, temples, wineries..."
                        className="w-full pl-12 pr-10 py-2 rounded-lg bg-transparent outline-none text-gray-800 dark:text-white"
                      />
                    </div>
      
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSearchParams({ category: selectedCategory });
                        }}
                        className="px-3 text-gray-500 hover:text-red-500"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              </div>
      
              {/* <div className="container-max px-4 py-8"> */}
                {/* Categories */}
                {/* <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSearchParams({
                          search: searchQuery,
                          category: cat.id,
                        });
                      }}
                      className={`px-5 py-2 rounded-full text-sm ${
                        selectedCategory === cat.id
                          ? "bg-black text-white"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div> */}
      
                {/* Results Header */}
                {/* <div className="flex justify-between mb-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    {loading ? "Loading..." : `${filtered.length} results`}
                  </p>
      
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded-lg px-3 py-2"
                  >
                    <option value="rating">Rating</option>
                    <option value="reviews">Reviews</option>
                    <option value="name">Name</option>
                  </select>
                </div> */}
      
                {/* ❌ CARDS REMOVED */}
                {/* {filtered.length > 0 ? (
                  <div className="text-center py-20">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                      Results found but cards are hidden
                    </h2>
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      No places found
                    </h3>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                        setSearchParams({});
                      }}
                      className="btn-primary"
                    >
                      Clear Filters
                    </button>
                  </div>
                )} */}
              {/* </div> */}
            </div>
          </div>


          {/*  */}
      {/* <div className="pt-10 text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Nearby Places Around Nashik
        </h2>
        <p className="text-muted-foreground">
          Explore popular destinations within 30 km of Nashik — perfect for
          short trips and weekend getaways.
        </p>
      </div> */}

      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </div> */}
    </div>

  );
}
export default NearbyPlaces;
// ✅