"use client";

import { useState } from 'react';
import { Pet } from '@/app/types/pet';

export default function ContactSeller({ pet }: { pet: Pet }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="space-y-4">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-gray-900">Contact Seller</h3>
        <p className="mt-1 text-sm text-gray-500">{pet.sellerName}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="I'm interested in this pet..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>

      {pet.sellerPhone && (
        <div className="text-center">
          <p className="text-sm text-gray-500">or</p>
          <a
            href={`tel:${pet.sellerPhone}`}
            className="mt-2 inline-block text-blue-600 hover:text-blue-500"
          >
            {pet.sellerPhone}
          </a>
        </div>
      )}
    </div>
  );
}