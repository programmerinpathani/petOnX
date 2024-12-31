"use client";

import { useState } from 'react';
import { useChatData } from '@/app/hooks/useChatData';
import ChatListItem from './ChatListItem';
import ChatSearch from './ChatSearch';

export default function ChatList() {
  const { chats, isLoading } = useChatData();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chats.filter(chat => 
    chat.sellerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div className="text-center py-8">Loading conversations...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <ChatSearch value={searchQuery} onChange={setSearchQuery} />
      <div className="divide-y divide-gray-200">
        {filteredChats.map(chat => (
          <ChatListItem key={chat.id} chat={chat} />
        ))}
      </div>
      {filteredChats.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No conversations found
        </div>
      )}
    </div>
  );
}