import { useState } from 'react';

interface SellerTypeSelectorProps {
  onTypeSelect: (type: 'individual' | 'business') => void;
}

export default function SellerTypeSelector({ onTypeSelect }: SellerTypeSelectorProps) {
  const [selectedType, setSelectedType] = useState<'individual' | 'business' | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Select seller type</h3>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => {
            setSelectedType('individual');
            onTypeSelect('individual');
          }}
          className={`p-4 border rounded-lg text-center hover:border-blue-500 transition-colors ${
            selectedType === 'individual' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
        >
          <div className="text-3xl mb-2">👤</div>
          <div className="font-medium">Individual Seller</div>
          <p className="text-sm text-gray-500">Sell as a private individual</p>
        </button>

        <button
          onClick={() => {
            setSelectedType('business');
            onTypeSelect('business');
          }}
          className={`p-4 border rounded-lg text-center hover:border-blue-500 transition-colors ${
            selectedType === 'business' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
        >
          <div className="text-3xl mb-2">🏢</div>
          <div className="font-medium">Shop/Farm Owner</div>
          <p className="text-sm text-gray-500">Sell as a business entity</p>
        </button>
      </div>
    </div>
  );
}