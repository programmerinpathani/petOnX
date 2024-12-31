"use client";

import { useState, useEffect } from 'react';
import { Pet } from '../types/pet';
import { featuredPets } from '../data/featuredPets';

export function useSearchResults(query: string, category: string) {
  const [results, setResults] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchPets = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay

      let filtered = [...featuredPets];

      if (query) {
        filtered = filtered.filter(pet =>
          pet.title.toLowerCase().includes(query.toLowerCase()) ||
          pet.location.toLowerCase().includes(query.toLowerCase())
        );
      }

      if (category) {
        filtered = filtered.filter(pet =>
          pet.category === category.toLowerCase()
        );
      }

      setResults(filtered);
      setIsLoading(false);
    };

    searchPets();
  }, [query, category]);

  return { results, isLoading };
}