"use client";

import { useEffect, useRef } from 'react';
import ChatPreview from './ChatPreview';
import { ChatPreviewType } from '@/app/types/chat';

const recentChats: ChatPreviewType[] = [
  {
    id: '1',
    sellerName: 'John Doe',
    lastMessage: 'Is the Golden Retriever still available?',
    timestamp: '2 min ago',
    unread: true,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32'
  },
  {
    id: '2',
    sellerName: 'Jane Smith',
    lastMessage: 'Yes, you can visit tomorrow',
    timestamp: '1 hour ago',
    unread: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32'
  }
];

export default function ChatDropdown({ onClose }: { onClose: () => void }) {
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
      className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50"
    >
      <div className="px-4 py-2 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Messages</h3>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {recentChats.map((chat) => (
          <ChatPreview key={chat.id} chat={chat} />
        ))}
      </div>
      <div className="px-4 py-2 border-t border-gray-200">
        <a
          href="/messages"
          className="block text-center text-blue-600 hover:text-blue-500 text-sm font-medium"
        >
          View All Messages
        </a>
      </div>
    </div>
  );
}