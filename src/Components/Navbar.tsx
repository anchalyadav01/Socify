export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0c24] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center text-center">
        <h1 className="text-3xl font-extrabold tracking-wide">SWIPEVERSE</h1>
        <p className="text-sm text-gray-300">unbiased dating app</p>
        <div className="mt-4 flex space-x-6 font-semibold text-white text-sm">
          <a href="#" className="hover:text-pink-400">Find Love</a>
          <a href="#" className="hover:text-pink-400">Likes You</a>
          <a href="#" className="hover:text-pink-400">Matches</a>
        </div>
      </div>
    </nav>
  );
}
