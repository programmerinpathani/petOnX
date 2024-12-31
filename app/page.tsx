import SearchSection from "./components/SearchSection";
import Categories from "./components/Categories";
import FeaturedPets from "./components/FeaturedPets";

export default function Home() {
  return (
    <main>
      <SearchSection />
      <Categories />
      <FeaturedPets />
    </main>
  );
}
