import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchResults from '../components/search/SearchResults';
import SearchFilters from '../components/search/SearchFilters';

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-6">
            <div className="w-64 flex-shrink-0">
              <SearchFilters />
            </div>
            <div className="flex-grow">
              <SearchResults />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}