import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryGrid from "./components/CategoryGrid";

export default function PostAdPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">
              Post Your Pet Ad
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Choose a category to get started
            </p>
            <CategoryGrid />
          </div>
        </div>
      </main>
    </div>
  );
}
