"use client";

import { useLocation } from '../contexts/LocationContext';
import { filterPetsByLocation } from '../utils/locationUtils';
import Link from 'next/link';
import FavoriteButton from './favorites/FavoriteButton';

export default function FeaturedPets() {
  const { selectedLocation } = useLocation();
  const filteredPets = filterPetsByLocation(selectedLocation);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Featured Ads {selectedLocation !== 'All Locations' && `in ${selectedLocation}`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPets.map((pet) => (
            <Link 
              key={pet.id} 
              href={`/pets/${pet.id}`}
              className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <FavoriteButton petId={pet.id} />
              <img
                src={pet.image}
                alt={pet.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{pet.title}</h3>
                <p className="text-blue-600 font-bold mb-2">${pet.price}</p>
                <p className="text-gray-500 text-sm">{pet.location}</p>
              </div>
            </Link>
          ))}
        </div>
        {filteredPets.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No pets available in this location
          </p>
        )}
      </div>
    </div>
  );
}