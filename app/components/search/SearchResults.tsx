"use client";

import { useSearchParams } from 'next/navigation';
import { useSearchResults } from '@/app/hooks/useSearchResults';
import PetCard from './PetCard';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  
  const { results, isLoading } = useSearchResults(query, category);

  if (isLoading) {
    return <div className="text-center py-8">Loading results...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {results.length} Results {query && `for "${query}"`}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
      {results.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No pets found matching your criteria
        </div>
      )}
    </div>
  );
}