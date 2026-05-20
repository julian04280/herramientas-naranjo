import { useState } from 'react';
import type { FC } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowLeft, Send, CheckCircle } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onClearCart: () => void;
}

const Cart: FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onClearCart }) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');

  const totalPrice = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + (price * item.quantity);
  }, 0);

  const cartSummary = items.map(item => `${item.name} (x${item.quantity}) - ${item.price}`).join(', ');

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep('cart');
      if (step === 'success') onClearCart();
    }, 300);
  };

  return (
    <div className={`fixed inset-0 z-[100] transition-visibility duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={resetAndClose}
      />
      
      {/* Drawer */}
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-naranjo-dark text-white shrink-0">
            <div className="flex items-center space-x-2">
              {step === 'checkout' ? (
                <button onClick={() => setStep('cart')} className="mr-2 hover:text-naranjo-primary transition-colors">
                  <ArrowLeft size={24} />
                </button>
              ) : (
                <ShoppingBag size={24} className="text-naranjo-primary" />
              )}
              <h2 className="text-xl font-bold">
                {step === 'cart' && 'Tu Carrito'}
                {step === 'checkout' && 'Finalizar Compra'}
                {step === 'success' && '¡Pedido Recibido!'}
              </h2>
            </div>
            <button onClick={resetAndClose} className="hover:text-naranjo-primary transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-grow overflow-y-auto">
            {step === 'cart' && (
              <div className="p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col justify-center items-center text-center py-20 space-y-4">
                    <div className="bg-gray-100 p-6 rounded-full text-gray-400">
                      <ShoppingBag size={48} />
                    </div>
                    <p className="text-gray-500 font-medium italic">Tu carrito está vacío</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex space-x-4 border-b border-gray-50 pb-6">
                      <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h4 className="font-bold text-naranjo-dark line-clamp-1">{item.name}</h4>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-naranjo-primary font-bold mt-1">{item.price}</p>
                        <div className="flex items-center space-x-3 mt-3">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 hover:bg-gray-100"><Minus size={14} /></button>
                            <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 hover:bg-gray-100"><Plus size={14} /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {step === 'checkout' && (
              <div className="p-8">
                <div className="mb-8 p-4 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-sm text-green-800 font-medium">
                    Resumen: {items.length} productos por un total de <span className="font-bold">${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </p>
                </div>
                
                <form 
                  action="https://formspree.io/f/mwvydwrn" 
                  method="POST"
                  className="space-y-6"
                  onSubmit={() => setTimeout(() => setStep('success'), 500)}
                >
                  {/* Hidden fields for cart data */}
                  <input type="hidden" name="_subject" value="Nuevo Pedido - Herramientas Naranjo" />
                  <input type="hidden" name="Carrito" value={cartSummary} />
                  <input type="hidden" name="Total" value={`$${totalPrice.toFixed(2)}`} />

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-naranjo-primary outline-none" placeholder="Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono de Contacto</label>
                    <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-naranjo-primary outline-none" placeholder="55 1234 5678" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-naranjo-primary outline-none" placeholder="juan@ejemplo.com" />
                  </div>
                  
                  <button type="submit" className="w-full bg-naranjo-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex justify-center items-center space-x-2">
                    <span>Confirmar y Enviar Pedido</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            )}

            {step === 'success' && (
              <div className="h-full flex flex-col justify-center items-center p-8 text-center space-y-6">
                <div className="text-green-500 bg-green-50 p-6 rounded-full">
                  <CheckCircle size={64} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-naranjo-dark mb-4">¡Pedido Enviado!</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hemos recibido tu solicitud correctamente. En breve, un <span className="text-naranjo-primary font-bold">asesor especializado</span> se pondrá en contacto contigo para formalizar tu pedido y coordinar los detalles.
                  </p>
                </div>
                <button 
                  onClick={resetAndClose}
                  className="bg-naranjo-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all"
                >
                  Cerrar y Volver al Catálogo
                </button>
              </div>
            )}
          </div>

          {/* Footer for Cart Step */}
          {step === 'cart' && items.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500 font-medium">Total Estimado</span>
                <span className="text-2xl font-bold text-naranjo-dark">
                  ${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <button 
                onClick={() => setStep('checkout')}
                className="w-full bg-naranjo-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 transition-all"
              >
                Finalizar Compra
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
