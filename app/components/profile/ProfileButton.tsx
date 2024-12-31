"use client";

import { useState } from 'react';
import ProfileDropdown from './ProfileDropdown';
import { ProfileIcon } from './ProfileIcons';

export default function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-gray-300"
      >
        <ProfileIcon />
        <span className="hidden md:inline">Profile</span>
      </button>
      {isOpen && <ProfileDropdown onClose={() => setIsOpen(false)} />}
    </div>
  );
}