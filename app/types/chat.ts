export interface ChatPreviewType {
  id: string;
  sellerName: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  avatar: string;
}

export interface MessageType {
  id: string;
  content: string;
  timestamp: string;
  isSender: boolean;
}