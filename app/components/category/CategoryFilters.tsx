"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CategoryFilters({ category }: { category: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState({
    min: searchParams.get('minPrice') || '',
    max: searchParams.get('maxPrice') || ''
  });

  const handlePriceFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (priceRange.min) params.set('minPrice', priceRange.min);
    if (priceRange.max) params.set('maxPrice', priceRange.max);
    router.push(`/category/${category}?${params.toString()}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-4">Filters</h3>
      
      <div className="space-y-4">
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
          <button
            onClick={handlePriceFilter}
            className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}