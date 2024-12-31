"use client";

import { useState } from 'react';
import { useChatMessages } from '@/app/hooks/useChatMessages';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function ChatMessage({ chatId }: { chatId: string }) {
  const { messages, isLoading, sendMessage } = useChatMessages(chatId);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading messages...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow h-[calc(100vh-300px)] flex flex-col">
      <MessageList messages={messages} />
      <MessageInput 
        value={newMessage}
        onChange={setNewMessage}
        onSend={handleSendMessage}
      />
    </div>
  );
}