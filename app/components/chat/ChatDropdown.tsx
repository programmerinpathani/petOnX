"use client";

import { useEffect, useRef } from 'react';
import { ChatPreviewType } from '@/app/types/chat';
import ChatPreview from './ChatPreview';

interface ChatDropdownProps {
  onClose: () => void;
  className?: string;
}

export default function ChatDropdown({ onClose, className = '' }: ChatDropdownProps) {
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

  return (
    <div
      ref={dropdownRef}
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
    >
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
      </div>
      
      <div className="divide-y divide-gray-100 max-h-[calc(100vh-200px)] overflow-y-auto">
        {recentChats.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            <p>No messages yet</p>
          </div>
        ) : (
          recentChats.map((chat) => (
            <ChatPreview key={chat.id} chat={chat} />
          ))
        )}
      </div>

      <div className="p-4 bg-gray-50 border-t">
        <button
          onClick={() => window.location.href = '/messages'}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
        >
          View All Messages
        </button>
      </div>
    </div>
  );
}