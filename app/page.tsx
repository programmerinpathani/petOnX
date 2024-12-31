import Header from './components/Header';
import SearchSection from './components/SearchSection';
import Categories from './components/Categories';
import FeaturedPets from './components/FeaturedPets';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <SearchSection />
      <Categories />
      <FeaturedPets />
      <Footer />
    </main>
  );
}