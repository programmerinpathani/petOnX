"use client";

import Link from 'next/link';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './icons/SocialIcons';

const footerLinks = {
  about: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' }
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Safety Center', href: '/safety' },
    { name: 'Community Guidelines', href: '/guidelines' },
    { name: 'Contact Us', href: '/contact' }
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' }
  ],
  locations: [
    { name: 'Mumbai', href: '/search?location=Mumbai' },
    { name: 'Pune', href: '/search?location=Pune' },
    { name: 'Delhi', href: '/search?location=Delhi' },
    { name: 'Bangalore', href: '/search?location=Bangalore' },
    { name: 'Kolkata', href: '/search?location=Kolkata' },
    { name: 'Hyderabad', href: '/search?location=Hyderabad' },
    { name: 'Surat', href: '/search?location=Surat' }
  ],
  social: [
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'Instagram', href: '#', icon: InstagramIcon }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3B2F4D,transparent)] opacity-50"></div>
      
      <div className="py-12 sm:py-16 relative">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-600 p-0.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <svg className="w-7 h-7 text-white transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400 text-transparent bg-clip-text">PetOnX</span>
              <span className="text-gray-400 text-sm">Premium Pet Platform</span>
            </div>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-flex items-center group">
                    <span className="relative overflow-hidden">
                      <span className="relative inline-block transform group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-flex items-center group">
                    <span className="relative overflow-hidden">
                      <span className="relative inline-block transform group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-sky-400 to-violet-400 text-transparent bg-clip-text">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-flex items-center group">
                    <span className="relative overflow-hidden">
                      <span className="relative inline-block transform group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">Popular Locations</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-flex items-center group">
                    <span className="relative overflow-hidden">
                      <span className="relative inline-block transform group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text">Follow Us</h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="transform transition-transform duration-200 group-hover:scale-110">
                      <link.icon />
                    </span>
                    <span className="relative overflow-hidden">
                      <span className="relative inline-block transform group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm sm:text-base">  {new Date().getFullYear()} PetOnX. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}