import { featuredPets } from '../data/featuredPets';

export function getUniqueLocations(): string[] {
  const locations = featuredPets.map(pet => pet.location);        
  return ['All Locations'].concat(Array.from(new Set(locations)));
}

export function filterPetsByLocation(location: string) {
  if (location === 'All Locations') {
    return featuredPets;
  }
  return featuredPets.filter(pet => pet.location === location);
}