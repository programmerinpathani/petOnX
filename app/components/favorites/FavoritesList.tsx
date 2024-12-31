"use client";

import { useFavorites } from '@/app/hooks/useFavorites';
import { featuredPets } from '@/app/data/featuredPets';
import { getPetById } from '@/app/utils/petUtils';
import PetCard from '../search/PetCard';

// Define the Pet type
type Pet = {
  id: number;
  title: string;
  price: number;
  location: string;
  category: string;
  image: string;
};

export default function FavoritesList() {
  const { favorites } = useFavorites();

  // Ensure favorites and featuredPets conform to the Pet type
  const favoritePets = featuredPets.filter((pet: Pet) =>
    favorites.some((fav: { id: number }) => fav.id === pet.id)
  );

  if (favoritePets.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h2>
        <p className="text-gray-600">Start adding pets to your favorites list!</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-gray-600 mb-6">
        {favoritePets.length} {favoritePets.length === 1 ? 'pet' : 'pets'} in your favorites
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritePets.map((favPet) => {
          const pet = getPetById(favPet.id);
          if (!pet) return null;
          return (
            <PetCard key={pet.id} pet={pet} showFavoriteButton />
          );
        })}
      </div>
    </div>
  );
}