export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        {children}
      </div>
    </main>
  );
}