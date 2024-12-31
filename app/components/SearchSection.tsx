"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (category) params.set('category', category);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-4">
            <input
              type="text"
              placeholder="Search for pets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="dogs">Dogs</option>
              <option value="cats">Cats</option>
              <option value="horses">Horses</option>
              <option value="goats">Goats</option>
              <option value="dairy-cattle">Dairy Cattle</option>
              <option value="birds">Birds</option>
              <option value="fish">Fish</option>
              <option value="others">Others</option>
            </select>
            <button 
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}