"use client";

import { useState, useEffect } from 'react';
import { MessageType } from '../types/chat';

// Mock messages data
const mockMessages: Record<string, MessageType[]> = {
  '1': [
    {
      id: '1',
      content: 'Hi, I saw your Golden Retriever listing',
      timestamp: '10:30 AM',
      isSender: true,
    },
    {
      id: '2',
      content: 'Yes, the puppy is still available!',
      timestamp: '10:31 AM',
      isSender: false,
    },
    {
      id: '3',
      content: 'Great! Can I come see it tomorrow?',
      timestamp: '10:32 AM',
      isSender: true,
    },
    {
      id: '4',
      content: 'Of course! What time works for you?',
      timestamp: '10:33 AM',
      isSender: false,
    }
  ],
  '2': [
    {
      id: '1',
      content: 'Hello, is the Persian cat still available?',
      timestamp: '2:15 PM',
      isSender: true,
    },
    {
      id: '2',
      content: 'Yes, it is! Would you like to see some more photos?',
      timestamp: '2:20 PM',
      isSender: false,
    }
  ]
};

export function useChatMessages(chatId: string) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMessages = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessages(mockMessages[chatId] || []);
      setIsLoading(false);
    };

    loadMessages();
  }, [chatId]);

  const sendMessage = (content: string) => {
    const newMessage: MessageType = {
      id: Date.now().toString(),
      content,
      timestamp: new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      isSender: true,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return { messages, isLoading, sendMessage };
}