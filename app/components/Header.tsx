"use client";

import Link from 'next/link';
import LocationSelector from './LocationSelector';
import ChatButton from './chat/ChatButton';
import ProfileButton from './profile/ProfileButton';
import PostAdButton from './post-ad/PostAdButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold">PetOnx</Link>
            <LocationSelector />
          </div>
          <div className="flex items-center gap-6">
            <ChatButton />
            <PostAdButton />
            <Link 
              href="/login" 
              className="text-white hover:text-gray-300"
            >
              Login
            </Link>
            <div className="border-l border-gray-700 h-6 mx-2" />
            <ProfileButton />
          </div>
        </div>
      </div>
    </header>
  );
}