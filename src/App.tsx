import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Hero from './components/ui/Hero';
import ProductCard from './components/catalog/ProductCard';
import ContactForm from './components/layout/ContactForm';
import Cart from './components/layout/Cart';
import TopBanner from './components/ui/TopBanner';
import ImageSlider from './components/ui/ImageSlider';
import ProcessSection from './components/ui/ProcessSection';
import productsData from './data/products.json';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const categories = ['Todas', ...new Set(productsData.map(p => p.category))];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-naranjo-dark flex flex-col">
      <Helmet>
        <title>Naranjo Héctor | Herramientas de Joyería y Grabado de Alta Precisión</title>
        <meta name="description" content="Distribuidor oficial de herramientas GRS y JURA en Colombia. Encuentra sistemas de aire, microbloques, microscopios y buriles para joyería profesional." />
        <meta name="keywords" content="herramientas joyería, grabado profesional, GRS Colombia, JURA tools, microscopio joyería, buriles C-Max, sistemas de aire grabado, Héctor Naranjo" />
        
        {/* Open Graph para Redes Sociales */}
        <meta property="og:title" content="Naranjo Héctor | Catálogo de Herramientas para Joyeros" />
        <meta property="og:description" content="La mejor selección de herramientas de alta precisión para el maestro joyero." />
        <meta property="og:type" content="website" />
      </Helmet>

      <TopBanner />
      <Navbar 
        onSearch={setSearchTerm} 
        searchTerm={searchTerm} 
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />
      
      <main className="flex-grow">
        <Hero />
        <ImageSlider />
        <ProcessSection />
        
        <section id="catalog" className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0">
            <div>
              <h2 className="text-3xl font-bold text-white">Nuestro Catálogo</h2>
              <p className="text-gray-400 mt-2">Explora nuestra selección de herramientas de alta precisión</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Buscar productos..."
                className="px-6 py-3 rounded-full bg-naranjo-gray text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-naranjo-primary w-full sm:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select 
                className="px-6 py-3 rounded-full bg-naranjo-gray text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-naranjo-primary appearance-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 italic">No se encontraron productos que coincidan con tu búsqueda.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('Todas');}}
                className="mt-4 text-naranjo-primary font-bold hover:underline"
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </section>

        <ContactForm />
      </main>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClearCart={() => setCartItems([])}
      />
      
      <footer className="bg-naranjo-dark text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Herramientas Naranjo. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="hover:text-naranjo-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-naranjo-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-naranjo-primary transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
