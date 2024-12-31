"use client";

import { useState, useEffect } from 'react';
import { Pet } from '../types/pet';
import { featuredPets } from '../data/featuredPets';

interface CategoryFilters {
  minPrice?: number;
  maxPrice?: number;
}

export function useCategoryResults(category: string, filters: CategoryFilters) {
  const [results, setResults] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay

      let filtered = featuredPets.filter(pet => pet.category === category);

      if (filters.minPrice !== undefined) {
        filtered = filtered.filter(pet => pet.price >= filters.minPrice!);
      }

      if (filters.maxPrice !== undefined) {
        filtered = filtered.filter(pet => pet.price <= filters.maxPrice!);
      }

      setResults(filtered);
      setIsLoading(false);
    };

    fetchResults();
  }, [category, filters.minPrice, filters.maxPrice]);

  return { results, isLoading };
}