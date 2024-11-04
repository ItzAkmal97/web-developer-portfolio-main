import { X, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="rounded-br-lg rounded-bl-lg">
      <nav className="relative">
        {/* Hamburger menu checkbox (hidden) */}
        <input type="checkbox" className="peer hidden" id="nav-toggle" />
        
        {/* Main header content */}
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold items-center">Muhammad Akmal</h1>
          
          {/* Hamburger and close button */}
          <label htmlFor="nav-toggle" className="cursor-pointer md:hidden">
            {/* Hamburger icon */}
            <Menu className="peer-checked:hidden h-6 w-6" />
            {/* Close icon */}
            <X className="hidden peer-checked:block h-6 w-6" />
          </label>

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
        <div className="absolute hidden peer-checked:block md:hidden w-full bg-slate-100 border-t border-slate-200">
          <ul className="flex flex-col items-center py-4 space-y-4">
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