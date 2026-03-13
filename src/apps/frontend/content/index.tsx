import React from "react";

interface Place {
  id: number;
  name: string;
  image: string;
  category: string;
  distance_from_nashik_km: number;
  description: string;
}

type Props = {
  place: Place;
};

const PlaceCard: React.FC<Props> = ({ place }) => {
  return (
    <>
<h1>Top Best Place to visit </h1>
    <div className=" m-6 mb-30 max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">

        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
          {place.category}
        </span>

        <h2 className="text-lg font-semibold text-gray-800">
          {place.name}
        </h2>

        <p className="text-sm text-gray-500">
          {place.distance_from_nashik_km} km from Nashik
        </p>

        <p className="text-sm text-gray-600 line-clamp-2">
          {place.description}
        </p>

        <button className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
          View Details
        </button>

      </div>
    </div>
    </>
  );
};

export default PlaceCard;