import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatList from "../components/chat/ChatList";
import ChatLayout from "../components/chat/ChatLayout";

export default function MessagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <ChatLayout>
        <ChatList />
      </ChatLayout>
    </div>
  );
}
