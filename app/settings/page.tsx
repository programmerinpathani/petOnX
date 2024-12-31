import Header from '../components/Header';
import Footer from '../components/Footer';
import SettingsTabs from '../components/settings/SettingsTabs';

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>
          <SettingsTabs />
        </div>
      </main>
      <Footer />
    </div>
  );
}