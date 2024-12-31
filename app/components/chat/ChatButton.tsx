"use client";

import { useState } from 'react';
import ChatDropdown from './ChatDropdown';

interface UnreadBadgeProps {
  count: number;
  className?: string;
}

interface ChatButtonProps {
  unreadCount?: number;
}

function ChatIcon() {
  return (
    <svg 
      className="w-6 h-6" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
      />
    </svg>
  );
}

function UnreadBadge({ count, className = '' }: UnreadBadgeProps) {
  if (count === 0) return null;
  
  return (
    <span 
      className={`absolute bg-red-500 text-white text-xs font-medium rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center ${className}`}
      aria-label={`${count} unread messages`}
    >
      {count}
    </span>
  );
}

export default function ChatButton({ unreadCount = 0 }: ChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
        aria-label={`Chat messages ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="relative">
          <ChatIcon />
          <UnreadBadge 
            count={unreadCount} 
            className="md:-right-1 md:-top-1 -right-2 -top-2"
          />
        </div>
        <span className="hidden md:inline">Messages</span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40 md:hidden" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <ChatDropdown 
            onClose={() => setIsOpen(false)} 
            className="absolute right-0 mt-2 w-80 md:w-96 z-50"
          />
        </>
      )}
    </div>
  );
}