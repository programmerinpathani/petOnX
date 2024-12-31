"use client";

import { useState, useEffect } from 'react';
import { ChatPreviewType } from '../types/chat';

// Simulated chat data - in a real app, this would come from an API
const mockChats: ChatPreviewType[] = [
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
  },
  {
    id: '3',
    sellerName: 'Mike Johnson',
    lastMessage: 'Thank you for your interest',
    timestamp: '2 hours ago',
    unread: false,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32'
  },
  {
    id: '4',
    sellerName: 'Sarah Wilson',
    lastMessage: 'The price is negotiable',
    timestamp: 'Yesterday',
    unread: false,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32'
  }
];

export function useChatData() {
  const [chats, setChats] = useState<ChatPreviewType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadChats = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setChats(mockChats);
      setIsLoading(false);
    };

    loadChats();
  }, []);

  return { chats, isLoading };
}