import { useState } from 'react';
import type { FC } from 'react';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onSearch: (term: string) => void;
  searchTerm: string;
  onOpenCart: () => void;
  cartCount: number;
}

const Navbar: FC<NavbarProps> = ({ onSearch, searchTerm, onOpenCart, cartCount }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-naranjo-dark text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <div className="flex items-center space-x-3 z-10">
          <img src="/recursos/logo.jpeg" alt="Logo Naranjo Héctor" className="h-12 w-12 object-contain rounded-full border border-naranjo-accent/20 bg-white p-0.5" />
          <span className="font-bold text-lg tracking-tight hidden sm:inline-block md:inline lg:text-xl truncate max-w-[150px] sm:max-w-none">
            Naranjo Héctor Herramientas para Joyeros
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium absolute left-1/2 transform -translate-x-1/2">
          <a href="/" className="hover:text-naranjo-primary transition-colors">Inicio</a>
          <a href="#catalog" className="hover:text-naranjo-primary transition-colors">Catálogo</a>
          <a href="#contacto" className="hover:text-naranjo-primary transition-colors">Contacto</a>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-3">
          {/* Search Bar - Better mobile handling */}
          <div className="relative flex items-center h-10">
            <input 
              type="text" 
              placeholder="Buscar..."
              className={`bg-white/10 border border-white/20 rounded-full py-1 pl-3 pr-9 text-sm focus:outline-none focus:ring-1 focus:ring-naranjo-primary transition-all duration-300 ${isSearchOpen ? 'w-32 sm:w-48 opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              autoFocus={isSearchOpen}
            />
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 hover:text-naranjo-primary transition-colors flex items-center justify-center w-10 h-10 ${isSearchOpen ? 'absolute right-0' : ''}`}
            >
              {isSearchOpen ? <X size={18} /> : <Search size={22} />}
            </button>
          </div>

          {/* Cart Icon */}
          <button 
            onClick={onOpenCart}
            className="relative w-10 h-10 flex items-center justify-center hover:text-naranjo-primary transition-colors group"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-0 bg-naranjo-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex justify-center items-center border border-naranjo-dark shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center hover:text-naranjo-primary transition-colors z-50"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 bg-naranjo-dark shadow-xl border-t border-white/5 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 space-y-6 font-semibold text-lg">
          <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-naranjo-primary transition-colors flex justify-between items-center">
            <span>Inicio</span>
          </a>
          <a href="#catalog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-naranjo-primary transition-colors flex justify-between items-center border-t border-white/5 pt-6">
            <span>Catálogo</span>
          </a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-naranjo-primary transition-colors flex justify-between items-center border-t border-white/5 pt-6 pb-4">
            <span>Contacto</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
