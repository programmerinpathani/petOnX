import Header from "../components/Header";
import Footer from "../components/Footer";
import FavoritesList from "../components/favorites/FavoritesList";

export default function FavoritesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">My Favorites</h1>
          <FavoritesList />
        </div>
      </main>
    </div>
  );
}
