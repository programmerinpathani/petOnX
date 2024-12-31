import Header from '../components/Header';
import Footer from '../components/Footer';
import PackageOptions from '../components/profile/PackageOptions';

export default function PackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Choose Your Package</h1>
            <p className="mt-2 text-gray-600">Select the perfect package for your needs</p>
          </div>
          <PackageOptions />
        </div>
      </main>
      <Footer />
    </div>
  );
}