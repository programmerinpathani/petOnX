import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CategoryResults from "@/app/components/category/CategoryResults";
import CategoryFilters from "@/app/components/category/CategoryFilters";

export function generateStaticParams() {
  return [
    { slug: "dogs" },
    { slug: "cats" },
    { slug: "horses" },
    { slug: "goats" },
    { slug: "dairy-cattle" },
    { slug: "birds" },
    { slug: "fish" },
    { slug: "others" },
  ];
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-6">
            <div className="w-64 flex-shrink-0">
              <CategoryFilters category={params.slug} />
            </div>
            <div className="flex-grow">
              <CategoryResults category={params.slug} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
