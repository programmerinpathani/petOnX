import { useState } from 'react';

interface RoleSelectorProps {
  onRoleSelect: (role: 'buyer' | 'seller') => void;
}

export default function RoleSelector({ onRoleSelect }: RoleSelectorProps) {
  const [selectedRole, setSelectedRole] = useState<'buyer' | 'seller' | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Choose your role</h3>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => {
            setSelectedRole('buyer');
            onRoleSelect('buyer');
          }}
          className={`p-4 border rounded-lg text-center hover:border-blue-500 transition-colors ${
            selectedRole === 'buyer' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
        >
          <div className="text-3xl mb-2">🛍️</div>
          <div className="font-medium">Buyer</div>
          <p className="text-sm text-gray-500">Browse and purchase pets</p>
        </button>

        <button
          onClick={() => {
            setSelectedRole('seller');
            onRoleSelect('seller');
          }}
          className={`p-4 border rounded-lg text-center hover:border-blue-500 transition-colors ${
            selectedRole === 'seller' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
        >
          <div className="text-3xl mb-2">💼</div>
          <div className="font-medium">Seller</div>
          <p className="text-sm text-gray-500">List pets for sale</p>
        </button>
      </div>
    </div>
  );
}