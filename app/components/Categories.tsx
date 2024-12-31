import Link from 'next/link';

const categories = [
  { name: 'Dogs', count: 2150, icon: '🐕', slug: 'dogs' },
  { name: 'Cats', count: 1832, icon: '🐱', slug: 'cats' },
  { name: 'Horses', count: 543, icon: '🐎', slug: 'horses' },
  { name: 'Goats', count: 328, icon: '🐐', slug: 'goats' },
  { name: 'Dairy Cattle', count: 245, icon: '🐄', slug: 'dairy-cattle' },
  { name: 'Birds', count: 945, icon: '🦜', slug: 'birds' },
  { name: 'Fish', count: 621, icon: '🐠', slug: 'fish' },
  { name: 'Small Pets', count: 432, icon: '🐹', slug: 'others' },
];

export default function Categories() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.slug}`}
              className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="text-4xl mb-2">{category.icon}</span>
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-gray-500 text-sm">{category.count} listings</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}