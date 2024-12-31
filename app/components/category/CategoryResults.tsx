"use client";

import { useSearchParams } from 'next/navigation';
import { useCategoryResults } from '@/app/hooks/useCategoryResults';
import PetCard from '../search/PetCard';

export default function CategoryResults({ category }: { category: string }) {
  const searchParams = useSearchParams();
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  
  const { results, isLoading } = useCategoryResults(category, {
    minPrice: minPrice ? parseInt(minPrice) : undefined,
    maxPrice: maxPrice ? parseInt(maxPrice) : undefined
  });

  if (isLoading) {
    return <div className="text-center py-8">Loading results...</div>;
  }

  const categoryTitle = category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {categoryTitle} ({results.length} {results.length === 1 ? 'Result' : 'Results'})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
      {results.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No pets found in this category
        </div>
      )}
    </div>
  );
}