import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Dogs",
    count: 2150,
    image: "https://img.icons8.com/fluency/96/dog.png",
    slug: "dogs",
  },
  {
    name: "Cats",
    count: 1832,
    image: "https://img.icons8.com/fluency/96/cat.png",
    slug: "cats",
  },
  {
    name: "Horses",
    count: 543,
    image: "https://img.icons8.com/fluency/96/horse.png",
    slug: "horses",
  },
  {
    name: "Goats",
    count: 328,
    image: "https://img.icons8.com/bubbles/100/goat.png",
    slug: "goats",
  },
  {
    name: "Dairy Cattle",
    count: 245,
    image: "https://img.icons8.com/fluency/96/cow.png",
    slug: "dairy-cattle",
  },
  {
    name: "Birds",
    count: 945,
    image: "https://img.icons8.com/fluency/96/parrot.png",
    slug: "birds",
  },
  {
    name: "Fish",
    count: 621,
    image: "https://img.icons8.com/fluency/96/fish.png",
    slug: "fish",
  },
  {
    name: "Small Pets",
    count: 432,
    image: "https://img.icons8.com/fluency/96/hamster.png",
    slug: "others",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            Browse by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of pet categories and find your perfect
            companion
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.slug}`}
              className="group relative bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-violet-100 overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  {/* Icon Container */}
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {/* Image */}
                      <div className="relative w-16 h-16">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={64}
                          height={64}
                          className="transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Category Name */}
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors duration-300">
                    {category.name}
                  </h3>

                  {/* Listing Count */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-medium text-violet-600">
                      {category.count.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">listings</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-violet-100 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
