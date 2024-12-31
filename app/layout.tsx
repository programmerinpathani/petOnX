import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LocationProvider } from "./contexts/LocationContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "PetOnX - Premium Pet Marketplace",
  description: "Find your perfect pet companion in our premium marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable}`}>
      <body className="font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <LocationProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LocationProvider>
      </body>
    </html>
  );
}
