import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Close the menu when switching to desktop view
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-slate-100 rounded-br-lg rounded-bl-lg">
      <nav className="relative">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold items-center">Muhammad Akmal</h1>

          {/* Hamburger and close button */}
          <button
            className="cursor-pointer md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close (X) icon */}
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex justify-center items-center gap-16 cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          {/* Desktop CTA button */}
          <button className="hidden md:block bg-slate-300 rounded-full px-4 py-2 font-semibold">
            Hire Me
          </button>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={`absolute top-full left-0 transform transition-transform duration-300 md:hidden w-full bg-slate-100 border-t border-slate-200 ${
            isMenuOpen
              ? 'translate-x-0'
              : '-translate-x-full'
          }`}
        >
          <ul className="flex flex-col w-full items-center py-4 space-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <button className="bg-slate-300 rounded-full px-4 py-2 font-semibold">
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;