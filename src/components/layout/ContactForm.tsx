import type { FC } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm: FC = () => {
  return (
    <section id="contacto" className="bg-naranjo-dark py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contáctanos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ¿Tienes alguna duda sobre nuestras herramientas o necesitas un presupuesto personalizado? 
              Estamos aquí para ayudarte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-naranjo-primary/20 p-3 rounded-lg text-naranjo-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Correo Electrónico</h4>
                  <p className="text-gray-400">julian04280@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-naranjo-primary/20 p-3 rounded-lg text-naranjo-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Teléfono</h4>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-naranjo-primary/20 p-3 rounded-lg text-naranjo-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Ubicación</h4>
                  <p className="text-gray-400">Ciudad de México, México</p>
                </div>
              </div>

              <div className="p-8 bg-naranjo-gray rounded-2xl text-white border border-white/5">
                <h4 className="font-bold text-xl mb-4 text-naranjo-accent">Horario de Atención</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex justify-between"><span>Lunes - Viernes:</span> <span>9:00 - 18:00</span></li>
                  <li className="flex justify-between"><span>Sábado:</span> <span>10:00 - 14:00</span></li>
                  <li className="flex justify-between"><span>Domingo:</span> <span>Cerrado</span></li>
                </ul>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-naranjo-gray p-8 rounded-2xl border border-white/5 shadow-xl">
              <form 
                action="https://formspree.io/f/mwvydwrn" 
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-naranjo-primary bg-naranjo-dark text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-naranjo-primary bg-naranjo-dark text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">Mensaje</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-naranjo-primary bg-naranjo-dark text-white"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-naranjo-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center space-x-2"
                >
                  <span>Enviar Mensaje</span>
                  <Send size={18} />
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-4">
                  Powered by Formspree
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
