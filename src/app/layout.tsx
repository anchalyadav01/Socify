// src/app/layout.tsx
import './globals.css';
import { FaSearch, FaHeart, FaRegHeart } from 'react-icons/fa';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0f0c24] text-white">
        {/* Sticky navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1233] text-white shadow-md">
          {/* Logo Section */}
          <div className="absolute top-3 left-4 z-50 leading-4">
            <span className="text-base font-bold tracking-wide">SWIPEVERSE</span><br />
            <span className="text-[10px] text-gray-400">UNBIASED DATING APP</span>
          </div>

          <div className="w-full max-w-7xl mx-auto px-16 flex items-center justify-between h-20">
            <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-28">
              {/* FIND LOVE */}
              <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white">
                <FaSearch className="text-lg" /> FIND LOVE
              </a>

              {/* LIKES YOU */}
              <a href="#" className="relative flex items-center gap-2 text-sm font-semibold text-white">
                <FaHeart className="text-lg" /> LIKES YOU
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">8</span>
              </a>

              {/* MATCHES */}
              <a href="#" className="relative flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white">
                <FaRegHeart className="text-lg" /> MATCHES
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">1</span>
              </a>
            </nav>

            <div className="w-8" />
          </div>
        </header>

        {/* Page Content */}
   <main className="pt-24 w-[80%] mx-auto">{children}</main>

      </body>
    </html>
  );
}
