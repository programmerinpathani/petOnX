"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { SettingsIcon } from './ProfileIcons';

const menuItems = [
  { label: 'My Listings', href: '/my-listings' },
  { label: 'Favorites', href: '/favorites' },
  { label: 'Buy Packages', href: '/packages', highlight: true },
  { label: 'Settings', href: '/settings', icon: SettingsIcon },
];

export default function ProfileDropdown({ onClose }: { onClose: () => void }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
    >
      <div className="px-4 py-3 border-b border-gray-200">
        <p className="text-sm font-medium text-gray-900">John Doe</p>
        <p className="text-sm text-gray-500 truncate">john@example.com</p>
      </div>

      <div className="py-1">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center px-4 py-2 text-sm ${
              item.highlight 
                ? 'text-blue-600 hover:bg-blue-50' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.icon && <item.icon />}
            <span className={item.icon ? 'ml-2' : ''}>{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-1">
        <button
          onClick={() => console.log('Logout clicked')}
          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}