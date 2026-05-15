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

  return (
    <nav className="bg-naranjo-dark text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-naranjo-primary p-1 rounded">
            <span className="font-bold text-xl italic">HN</span>
          </div>
          <span className="font-bold text-xl tracking-tight hidden md:inline">HERRAMIENTAS NARANJO</span>
        </div>

        <div className="hidden md:flex space-x-8 font-medium">
          <a href="/" className="hover:text-naranjo-primary transition-colors">Inicio</a>
          <a href="#catalog" className="hover:text-naranjo-primary transition-colors">Catálogo</a>
          <a href="#contacto" className="hover:text-naranjo-primary transition-colors">Contacto</a>
        </div>

        <div className="flex items-center space-x-4">
          <div className={`relative flex items-center transition-all duration-300 ${isSearchOpen ? 'w-40 md:w-64' : 'w-10'}`}>
            <input 
              type="text" 
              placeholder="Buscar..."
              className={`w-full bg-white/10 border border-white/20 rounded-full py-1.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-naranjo-primary transition-all ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              autoFocus={isSearchOpen}
            />
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`absolute right-0 p-2 hover:text-naranjo-primary transition-colors ${isSearchOpen ? 'text-naranjo-primary' : ''}`}
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>

          <button 
            onClick={onOpenCart}
            className="relative p-2 hover:text-naranjo-primary transition-colors group"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-naranjo-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex justify-center items-center border-2 border-naranjo-dark group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </button>

          <button className="md:hidden hover:text-naranjo-primary transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
