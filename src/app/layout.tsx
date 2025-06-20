// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FaHeart, FaSearch, FaUserFriends } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SWIPEVERSE",
  description: "Unbiased dating app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold">SWIPEVERSE</h1>
          <p className="text-sm text-gray-600">Unbiased dating app</p>
          <nav className="flex space-x-4 mt-2 text-blue-600 font-medium">
            <Link href="/" className="flex items-center gap-1"><FaSearch /> Find Love</Link>
            <Link href="/likes" className="flex items-center gap-1 text-purple-600"><FaHeart /> Likes You</Link>
            <Link href="/matches" className="flex items-center gap-1"><FaUserFriends /> Matches</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
