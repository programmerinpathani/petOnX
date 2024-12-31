"use client";

import { useRouter } from 'next/navigation';
import { categories } from './categories';

export default function PostAdModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  const handleCategorySelect = (slug: string) => {
    router.push(`/post-ad/${slug}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Choose a Category</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleCategorySelect(category.slug)}
              className="flex flex-col items-center p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <span className="text-3xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}