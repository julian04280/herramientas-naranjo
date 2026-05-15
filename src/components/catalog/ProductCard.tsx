import type { FC } from 'react';

import { ShoppingCart } from 'lucide-react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    category: string;
    brand: string;
    description: string;
    image: string;
    price: string;
  };
  onAddToCart: (product: any) => void;
}

const ProductCard: FC<ProductProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-gray-50 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-naranjo-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            {product.brand}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <p className="text-naranjo-primary text-xs font-semibold uppercase tracking-wider">{product.category}</p>
        </div>
        <h3 className="text-xl font-bold text-naranjo-dark mb-2 group-hover:text-naranjo-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="pt-4 border-t border-gray-50 flex flex-col space-y-4">
            <span className="text-2xl font-bold text-naranjo-dark">{product.price}</span>
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-naranjo-dark hover:bg-naranjo-primary text-white font-bold py-3 rounded-xl transition-all flex justify-center items-center space-x-2 group/btn"
            >
              <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform" />
              <span>Agregar al Carrito</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
