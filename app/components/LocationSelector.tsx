"use client";

import { useState, useEffect, useRef } from 'react';
import { useLocation } from '../contexts/LocationContext';
import { getUniqueLocations } from '../utils/locationUtils';

declare global {
  interface Window {
    google: any;
  }
}

export default function LocationSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { selectedLocation, setSelectedLocation } = useLocation();
  const locations = getUniqueLocations();
  const autocompleteRef = useRef<any>(null);

  useEffect(() => {
    // Load Google Maps JavaScript API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize Google Places Autocomplete
      if (window.google) {
        const input = document.getElementById('location-search') as HTMLInputElement;
        autocompleteRef.current = new window.google.maps.places.Autocomplete(input, {
          types: ['(cities)'],
        });

        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current.getPlace();
          if (place.formatted_address) {
            setSelectedLocation(place.formatted_address);
            setIsOpen(false);
          }
        });
      }
    };

    return () => {
      // Cleanup
      const scripts = document.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes('maps.googleapis.com')) {
          scripts[i].remove();
        }
      }
    };
  }, [setSelectedLocation]);

  const detectCurrentLocation = () => {
    setIsLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
            );
            const data = await response.json();
            if (data.results[0]) {
              const address = data.results[0].formatted_address;
              setSelectedLocation(address);
              setIsOpen(false);
            }
          } catch (error) {
            console.error('Error getting location:', error);
          } finally {
            setIsLoading(false);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoading(false);
        }
      );
    }
  };

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
        <div className="absolute top-full mt-2 w-80 bg-white rounded-lg shadow-lg py-2 text-gray-800 z-50">
          <div className="px-4 py-2 space-y-2">
            <input
              id="location-search"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search location..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={detectCurrentLocation}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md"
              disabled={isLoading}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {isLoading ? 'Detecting...' : 'Use current location'}
            </button>
          </div>
          <div className="border-t mt-2"></div>
          <div className="px-4 py-2 max-h-60 overflow-y-auto">
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