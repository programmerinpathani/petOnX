import { Pet } from '../types/pet';
import { featuredPets } from '../data/featuredPets';

export function getPetById(id: number): Pet | undefined {
  const pet = featuredPets.find(p => p.id === id);
  
  if (!pet) return undefined;

  return {
    ...pet,
    breed: pet.title.split(' ')[0] + ' ' + pet.title.split(' ')[1],
    age: '2 years',
    height: '24 inches',
    weight: '65 lbs',
    healthStatus: 'Excellent',
    sellerId: 'seller-123',
    sellerName: 'John Doe',
    sellerPhone: '+1 (555) 123-4567',
    sellerEmail: 'john@example.com'
  };
}