"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState({
    min: '',
    max: ''
  });

  const handleFilter = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', category);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-4">Filters</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select 
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full border rounded-md p-2"
            value={searchParams.get('category') || ''}
          >
            <option value="">All Categories</option>
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
            <option value="horses">Horses</option>
            <option value="goats">Goats</option>
            <option value="dairy-cattle">Dairy Cattle</option>
            <option value="birds">Birds</option>
            <option value="fish">Fish</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full border rounded-md p-2"
              value={priceRange.min}
              onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full border rounded-md p-2"
              value={priceRange.max}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}