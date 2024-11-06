import { useState} from 'react';
import { Link } from 'react-scroll';

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

 
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };    

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  window.addEventListener('scroll', handleScroll);
    

  const baseClass = "rounded-br-lg rounded-bl-lg sticky top-0 left-0 z-50 bg-[#ffe4c4] transition-shadow duration-300 ease-in-out";
  const shadowClass = "shadow-lg";

  return (
    <header className={`${baseClass} ${isScroll ? shadowClass : ''}`}>
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold items-center">Muhammad Akmal</h1>

          {/* Hamburger and close button */}
          <button
            className="cursor-pointer md:hidden z-50"
            onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close (X) icon */}
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          {/* Desktop navigation */}
          <ul onResize={handleResize} className="hidden md:flex justify-center items-center gap-16 cursor-pointer">
            <Link
            to="hero"
            smooth={true}
            duration={300}
            className="hover:text-orange-800 font-semibold"
            >
            <li>Home</li>
            </Link>

            <Link 
            to="about"
            smooth={true}
            duration={300}
            className="hover:text-orange-800 font-semibold"
            >
            <li>About</li>
            </Link>
        
            <Link
            to="contact"
            smooth={true}
            duration={300}
            className="hover:text-orange-800 font-semibold"
            >
            <li>Contact</li>
            </Link>
            
            
          </ul>

          {/* Desktop CTA button */}
          <a
             href="mailto:muhammadakmal441@gmail.com?subject=Inquiry about hiring"
                className="hidden md:inline-block bg-bisque-900 rounded-full px-4 py-2 border border-black hover:bg-orange-200 font-semibold transition duration-300 ease-in-out">Hire Me
            </a>

           
        </div>

        {/* Mobile navigation menu */}
        <div
          className={`absolute top-0 transform transition-transform duration-300 md:hidden w-full bg-orange-100 ${
            isMenuOpen
              ? 'translate-y-0'
              : '-translate-y-full'
          }`}
        >
          <ul className="flex flex-col w-full items-center py-4 space-y-4 cursor-pointer">
          <Link
            to="hero"
            smooth={true}
            duration={300}
            className="hover:text-orange-800 font-semibold"
            >
            <li>Home</li>
            </Link>

            <Link 
            to="about"
            smooth={true}
            duration={300}
            className="hover:text-orange-800 font-semibold"
            >
            <li>About</li>
            </Link>
        
            <Link
            to="contact"
            smooth={true}
            duration={300}
            className="hover:text-orange-800 font-semibold"
            >
            <li>Contact</li>
            </Link>
            <li>
            <a
                href="mailto:muhammadakmal441@gmail.com?subject=Inquiry about hiring"
                className="md:inline-block bg-bisque-900 rounded-full px-4 py-2 border border-black hover:bg-orange-200 font-semibold transition duration-300 ease-in-out">Hire Me</a>

            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;