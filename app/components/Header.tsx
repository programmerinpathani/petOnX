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
        isScrolled ? "bg-gray-900/95 backdrop-blur-lg shadow-xl" : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Location */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-600 p-0.5 transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white transform group-hover:rotate-12 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400 text-transparent bg-clip-text">
                  PetOnX
                </span>
                <span className="text-xs sm:text-sm text-gray-400">
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
              <div className="w-px h-6 bg-gray-700/50" />
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
              className="md:hidden relative group p-2 -mr-2"
            >
              <div className="relative flex overflow-hidden items-center justify-center rounded-lg w-[40px] h-[40px] transform transition-all duration-200 bg-gray-800">
                <div
                  className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${
                    isMobileMenuOpen ? "translate-x-10" : ""
                  }`}
                >
                  <div className="bg-white h-[2px] w-5 transform transition-all duration-300 origin-left group-hover:bg-violet-400"></div>
                  <div className="bg-white h-[2px] w-5 rounded transform transition-all duration-300 group-hover:bg-violet-400"></div>
                  <div className="bg-white h-[2px] w-5 transform transition-all duration-300 origin-left group-hover:bg-violet-400"></div>
                </div>

                <div
                  className={`absolute items-center justify-center w-[20px] h-[20px] transform transition-all duration-500 ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-10"
                  } flex`}
                >
                  <div className="absolute w-5 h-[2px] bg-white transform transition-all duration-500 rotate-45 group-hover:bg-violet-400"></div>
                  <div className="absolute w-5 h-[2px] bg-white transform transition-all duration-500 -rotate-45 group-hover:bg-violet-400"></div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div
            className={`absolute right-0 top-0 h-full w-[90%] max-w-[400px] bg-black border-l border-gray-800/30 shadow-[0_0_100px_0_rgba(0,0,0,0.8)] transition-transform duration-500 ease-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="relative h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
              {/* Menu Header */}
              <div className="sticky top-0 z-10 bg-black/95 backdrop-blur-xl px-4 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400 text-transparent bg-clip-text">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative group p-2 -mr-2"
                  >
                    <div className="absolute -inset-2 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg
                      className="relative w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Menu Content */}
              <div className="p-4 space-y-8">
                {/* Location Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                    <div className="relative">
                      <div className="absolute -inset-1.5 bg-violet-500/10 rounded-full blur-sm"></div>
                      <svg
                        className="relative w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                    </div>
                    <span className="bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">
                      Location
                    </span>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-black rounded-xl p-3.5 border border-gray-800/50 shadow-lg">
                      <LocationSelector />
                    </div>
                  </div>
                </div>

                {/* Actions Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                    <div className="relative">
                      <div className="absolute -inset-1.5 bg-indigo-500/10 rounded-full blur-sm"></div>
                      <svg
                        className="relative w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    </div>
                    <span className="bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text">
                      Quick Actions
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="">
                        <ChatButton />
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/20 to-sky-600/20 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="">
                        <PostAdButton />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                    <div className="relative">
                      <div className="absolute -inset-1.5 bg-sky-500/10 rounded-full blur-sm"></div>
                      <svg
                        className="relative w-5 h-5"
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
                    </div>
                    <span className="bg-gradient-to-r from-sky-400 to-violet-400 text-transparent bg-clip-text">
                      Account
                    </span>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                    <Link
                      href="/login"
                      className="relative flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-all bg-black hover:bg-white/5 rounded-xl px-4 py-3.5 border border-gray-800/50 hover:border-violet-500/50"
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
                      <span>Login to Your Account</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
