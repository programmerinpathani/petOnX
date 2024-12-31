"use client";

import { Pet } from '@/app/types/pet';
import PetImageGallery from './PetImageGallery';
import PetSpecifications from './PetSpecifications';
import ContactSeller from './ContactSeller';

export default function PetDetails({ pet }: { pet: Pet }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <PetImageGallery images={[pet.image]} />
        
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{pet.title}</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600">{pet.description}</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
          <PetSpecifications pet={pet} />
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">${pet.price}</span>
            </div>
            <ContactSeller pet={pet} />
          </div>
        </div>
      </div>
    </div>
  );
}