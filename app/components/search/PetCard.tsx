import { Pet } from '@/app/types/pet';
import Link from 'next/link';
import FavoriteButton from '../favorites/FavoriteButton';

export default function PetCard({ 
  pet, 
  showFavoriteButton = true 
}: { 
  pet: Pet;
  showFavoriteButton?: boolean;
}) {
  return (
    <Link href={`/pets/${pet.id}`}>
      <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {showFavoriteButton && <FavoriteButton petId={pet.id} />}
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
      </div>
    </Link>
  );
}