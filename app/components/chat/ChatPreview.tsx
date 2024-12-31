import { ChatPreviewType } from '@/app/types/chat';

export default function ChatPreview({ chat }: { chat: ChatPreviewType }) {
  return (
    <a
      href={`/messages/${chat.id}`}
      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <img
          src={chat.avatar}
          alt={chat.sellerName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-900 truncate">
              {chat.sellerName}
            </p>
            <span className="text-xs text-gray-500">{chat.timestamp}</span>
          </div>
          <p className={`text-sm ${chat.unread ? 'text-gray-900 font-medium' : 'text-gray-500'} truncate`}>
            {chat.lastMessage}
          </p>
        </div>
        {chat.unread && (
          <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
        )}
      </div>
    </a>
  );
}