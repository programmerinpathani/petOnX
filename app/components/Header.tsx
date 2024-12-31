"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LocationSelector from "./LocationSelector";
import ChatButton from "./chat/ChatButton";
import ProfileButton from "./profile/ProfileButton";
import PostAdButton from "./post-ad/PostAdButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-lg" : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo and Location */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-600 p-0.5 transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white transform group-hover:rotate-12 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400 text-transparent bg-clip-text">
                  PetOnX
                </span>
                <span className="text-gray-400 text-sm">
                  Premium Pet Platform
                </span>
              </div>
            </Link>
            <div className="hidden md:block">
              <LocationSelector />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <ChatButton />
              <PostAdButton />
              <div className="w-px h-6 bg-gray-700" />
              <Link
                href="/login"
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Login
                </span>
              </Link>
              <ProfileButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative group p-2"
            >
              <div className="relative flex overflow-hidden items-center justify-center w-[24px] h-[24px] transform transition-all duration-200">
                <div
                  className={`flex flex-col justify-between w-[24px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${
                    isMobileMenuOpen ? "translate-x-10" : ""
                  }`}
                >
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
                  <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300"></div>
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
                </div>

                <div
                  className={`absolute items-center justify-center w-[24px] h-[24px] transform transition-all duration-500 ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-10"
                  }`}
                >
                  <div className="absolute w-7 h-[2px] bg-white transform transition-all duration-500 rotate-45"></div>
                  <div className="absolute w-7 h-[2px] bg-white transform transition-all duration-500 -rotate-45"></div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 space-y-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <LocationSelector />
              <div className="flex items-center gap-4">
                <ChatButton />
                <PostAdButton />
              </div>
              <Link
                href="/login"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
