import { Pet } from '@/app/types/pet';

export default function PetSpecifications({ pet }: { pet: Pet }) {
  const specifications = [
    { label: 'Breed', value: pet.breed },
    { label: 'Age', value: pet.age },
    { label: 'Height', value: pet.height },
    { label: 'Weight', value: pet.weight },
    { label: 'Health Status', value: pet.healthStatus },
    { label: 'Location', value: pet.location },
  ];

  return (
    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {specifications.map((spec) => (
        <div key={spec.label} className="border-b border-gray-200 pb-4">
          <dt className="text-sm font-medium text-gray-500">{spec.label}</dt>
          <dd className="mt-1 text-lg text-gray-900">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}