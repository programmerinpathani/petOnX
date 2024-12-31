"use client";

import { useState } from 'react';

export interface Package {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    duration: '1 month',
    features: [
      'Up to 5 listings',
      'Basic analytics',
      'Email support',
      'Standard visibility'
    ]
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 24.99,
    duration: '1 month',
    features: [
      'Up to 20 listings',
      'Advanced analytics',
      'Priority support',
      'Featured listings',
      'Premium visibility'
    ],
    isPopular: true
  },
  {
    id: 'business',
    name: 'Business',
    price: 49.99,
    duration: '1 month',
    features: [
      'Unlimited listings',
      'Full analytics suite',
      '24/7 support',
      'Featured listings',
      'Maximum visibility',
      'Custom branding'
    ]
  }
];

export default function PackageOptions() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handlePurchase = (packageId: string) => {
    console.log('Purchase package:', packageId);
    // Implement purchase logic here
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative bg-white rounded-lg shadow-md p-6 border ${
              pkg.isPopular ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            {pkg.isPopular && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">${pkg.price}</span>
              <span className="text-gray-500">/{pkg.duration}</span>
            </div>
            <ul className="mb-6 space-y-2">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handlePurchase(pkg.id)}
              className={`w-full py-2 px-4 rounded-md ${
                pkg.isPopular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Choose {pkg.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}