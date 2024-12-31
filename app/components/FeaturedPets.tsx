"use client";

import { useLocation } from "../contexts/LocationContext";
import { filterPetsByLocation } from "../utils/locationUtils";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./favorites/FavoriteButton";

export default function FeaturedPets() {
  const { selectedLocation } = useLocation();
  const filteredPets = filterPetsByLocation(selectedLocation);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
              Featured Pets
              {selectedLocation !== "All Locations" && (
                <span className="block text-xl mt-2 text-gray-600 font-normal">
                  in {selectedLocation}
                </span>
              )}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of exceptional pets looking for
              their forever homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPets.map((pet) => (
              <Link
                key={pet.id}
                href={`/pets/${pet.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-violet-100"
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                　 　{/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <Image
                    src={pet.image}
                    alt={pet.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <FavoriteButton
                    petId={pet.id}
                    className="absolute top-4 right-4 z-20"
                  />
                </div>
                {/* Content */}
                <div className="p-6 relative">
                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-600 transition-colors duration-300">
                    {pet.title}
                  </h3>

                  {/* Price Tag */}
                  <div className="inline-block bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    ${pet.price.toLocaleString()}
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {pet.location}
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-violet-100 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPets.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-block p-4 rounded-full bg-violet-100/50 mb-4">
                <svg
                  className="w-8 h-8 text-violet-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4M8 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <p className="text-lg text-gray-600 mb-2">No Pets Available</p>
              <p className="text-gray-500">
                We couldn't find any pets in {selectedLocation}. Try searching
                in a different location.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
