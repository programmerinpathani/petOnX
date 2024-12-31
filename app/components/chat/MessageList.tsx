import { MessageType } from '@/app/types/chat';

export default function MessageList({ messages }: { messages: MessageType[] }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[70%] rounded-lg p-3 ${
              message.isSender
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            <p className="text-sm">{message.content}</p>
            <p className={`text-xs mt-1 ${
              message.isSender ? 'text-blue-100' : 'text-gray-500'
            }`}>
              {message.timestamp}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}