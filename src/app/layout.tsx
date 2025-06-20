// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swipeverse",
  description: "Unbiased dating app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="text-center mt-6">
          <h1 className="text-4xl font-bold text-black">SWIPEVERSE</h1>
          <p className="text-sm text-gray-500 mb-4">Unbiased dating app</p>
          <nav className="space-x-6 text-blue-700 underline font-medium">
            <Link href="/">Find Love</Link>
            <Link href="/likes">Likes You</Link>
            <Link href="/matches">Matches</Link>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}