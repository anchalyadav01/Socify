import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="bg-base-100 text-white">
        <header className="text-center py-6 bg-neutral text-neutral-content">
          <h1 className="text-4xl font-bold">SWIPEVERSE</h1>
          <p className="text-sm">unbiased dating app</p>
          <nav className="mt-4 flex justify-center gap-6 text-sm font-medium">
            <a className="hover:underline">Find Love</a>
            <a className="hover:underline">Likes You</a>
            <a className="hover:underline">Matches</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
