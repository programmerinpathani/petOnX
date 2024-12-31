"use client";

import { useFavorites } from '@/app/hooks/useFavorites';

export default function FavoriteButton({ petId, className = '' }: { petId: number; className?: string }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const isCurrentlyFavorite = isFavorite(petId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    e.stopPropagation(); // Prevent event bubbling
    if (isCurrentlyFavorite) {
      removeFavorite(petId);
    } else {
      addFavorite(petId);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} absolute top-2 right-2 p-2 rounded-full ${
        isCurrentlyFavorite ? 'bg-red-500' : 'bg-white'
      } shadow-md hover:scale-110 transition-transform z-10`}
      aria-label={isCurrentlyFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        className={`w-5 h-5 ${isCurrentlyFavorite ? 'text-white' : 'text-gray-600'}`}
        fill={isCurrentlyFavorite ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}