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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white flex items-center">
                    <link.icon />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} PetOnx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}