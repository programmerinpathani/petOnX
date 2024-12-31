"use client";

import { useState, useEffect } from 'react';
import { FavoriteItem } from '../types/favorites';

// Initialize with 3 default favorites
const DEFAULT_FAVORITES: FavoriteItem[] = [
  { id: 1, dateAdded: new Date().toISOString() }, // German Shepherd Puppy
  { id: 4, dateAdded: new Date().toISOString() }, // Persian Cat
  { id: 7, dateAdded: new Date().toISOString() }  // Arabian Horse
];

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    } else {
      // Set default favorites if none exist
      setFavorites(DEFAULT_FAVORITES);
      localStorage.setItem('favorites', JSON.stringify(DEFAULT_FAVORITES));
    }
  }, []);

  const addFavorite = (petId: number) => {
    const newFavorite: FavoriteItem = {
      id: petId,
      dateAdded: new Date().toISOString()
    };
    const updatedFavorites = [...favorites, newFavorite];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (petId: number) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== petId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (petId: number) => {
    return favorites.some(fav => fav.id === petId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}