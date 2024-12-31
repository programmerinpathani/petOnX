"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() && !category) return;

    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery.trim());
    if (category) params.set("category", category);
    router.push(`/search?${params.toString()}`);
  };

  const handleQuickFilter = (filter: string) => {
    setCategory(filter.toLowerCase());
    const params = new URLSearchParams();
    params.set("category", filter.toLowerCase());
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            Find Your Perfect Pet
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Search through thousands of pets waiting for their forever home
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <div
              className={`p-3 bg-white rounded-2xl transition-all duration-300 ${
                isFocused
                  ? "shadow-xl ring-1 ring-violet-100"
                  : "shadow-lg hover:shadow-xl"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search for pets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full px-4 py-3.5 bg-gray-50 rounded-xl text-gray-900 placeholder-gray-500 border border-gray-200 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all"
                  />
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:w-auto">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full sm:w-48 px-4 py-3.5 bg-gray-50 rounded-xl text-gray-900 border border-gray-200 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">All Categories</option>
                    <option value="dogs">Dogs</option>
                    <option value="cats">Cats</option>
                    <option value="horses">Horses</option>
                    <option value="goats">Goats</option>
                    <option value="dairy-cattle">Dairy Cattle</option>
                    <option value="birds">Birds</option>
                    <option value="fish">Fish</option>
                    <option value="others">Others</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full sm:w-auto sm:whitespace-nowrap px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 shadow-lg shadow-violet-200 hover:shadow-violet-300"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Quick filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {["Dogs", "Cats", "Birds", "Fish"].map((filter) => (
              <button
                key={filter}
                onClick={() => handleQuickFilter(filter)}
                className="px-4 sm:px-5 py-2 text-sm font-medium text-gray-700 bg-white rounded-full border border-gray-200 hover:border-violet-500 hover:text-violet-600 hover:shadow-md transition-all duration-200"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
