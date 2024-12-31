"use client";

import { useRouter } from 'next/navigation';

export default function PostAdButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/post-ad')}
      className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-100"
    >
      Post Ad
    </button>
  );
}