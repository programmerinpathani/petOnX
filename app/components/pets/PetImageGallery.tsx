"use client";

import { useState } from 'react';

export default function PetImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img
          src={images[selectedImage]}
          alt="Pet"
          className="w-full h-full object-cover"
        />
      </div>
      
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-w-1 aspect-h-1 overflow-hidden rounded-lg ${
                selectedImage === index ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <img
                src={image}
                alt={`Pet thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}