"use client";

import { useRouter } from 'next/navigation';
import { categories } from '@/app/components/post-ad/categories';

export default function CategoryGrid() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => router.push(`/post-ad/${category.slug}`)}
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-500"
        >
          <span className="text-4xl mb-3">{category.icon}</span>
          <span className="font-medium text-gray-900">{category.name}</span>
          <span className="text-sm text-gray-500 mt-1">Post {category.name} Ad</span>
        </button>
      ))}
    </div>
  );
}