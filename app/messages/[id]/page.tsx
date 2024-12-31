import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ChatLayout from '@/app/components/chat/ChatLayout';
import ChatMessage from '@/app/components/chat/ChatMessage';

// Generate static params for all chat routes
export function generateStaticParams() {
  // Using the mock chat IDs from our data
  return ['1', '2', '3', '4'].map((id) => ({
    id: id,
  }));
}

export default function ChatPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ChatLayout>
        <ChatMessage chatId={params.id} />
      </ChatLayout>
      <Footer />
    </div>
  );
}