"use client";

import { useState } from 'react';
import { useLocation } from '../contexts/LocationContext';
import { getUniqueLocations } from '../utils/locationUtils';

export default function LocationSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedLocation, setSelectedLocation } = useLocation();
  const locations = getUniqueLocations();

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-gray-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {selectedLocation}
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg py-2 text-gray-800 z-50">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search location..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="px-4 py-2">
            <button
              onClick={() => {
                setSelectedLocation('All Locations');
                setIsOpen(false);
              }}
              className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
            >
              All Locations
            </button>
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setSelectedLocation(loc);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}