import { ChatPreviewType } from '@/app/types/chat';
import Link from 'next/link';

export default function ChatListItem({ chat }: { chat: ChatPreviewType }) {
  return (
    <Link 
      href={`/messages/${chat.id}`}
      className="block hover:bg-gray-50 transition-colors"
    >
      <div className="p-4 flex items-center gap-4">
        <img
          src={chat.avatar}
          alt={chat.sellerName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="font-medium text-gray-900 truncate">
              {chat.sellerName}
            </p>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {chat.timestamp}
            </span>
          </div>
          <p className={`text-sm truncate ${
            chat.unread ? 'text-gray-900 font-medium' : 'text-gray-500'
          }`}>
            {chat.lastMessage}
          </p>
        </div>
        {chat.unread && (
          <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
        )}
      </div>
    </Link>
  );
}