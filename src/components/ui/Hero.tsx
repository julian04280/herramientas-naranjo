import type { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="relative bg-naranjo-dark py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/recursos/melting-gold.avif" 
          alt="Gold Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-naranjo-dark/80 via-naranjo-dark/40 to-naranjo-dark"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--color-naranjo-primary),transparent)] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left md:flex items-center">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Precisión Industrial para el <span className="text-naranjo-accent drop-shadow-sm">Maestro Joyero</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg font-medium">
            Distribuidor oficial de las mejores marcas de grabado y engaste. Encuentra las herramientas que llevarán tu arte al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a href="#catalog" className="bg-naranjo-primary hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-green-900/40">
              Ver Catálogo
            </a>
            <a href="#contacto" className="border-2 border-naranjo-accent/50 hover:bg-naranjo-accent hover:text-naranjo-dark text-white font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm">
              Saber Más
            </a>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <div className="relative h-96 w-full flex justify-center items-center">
             <div className="w-80 h-80 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-md flex justify-center items-center rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <img src="/recursos/logo.jpeg" alt="Logo" className="w-56 h-56 object-contain" />
             </div>
             <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-2xl bg-naranjo-accent/20 backdrop-blur-sm -rotate-6 border border-naranjo-accent/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
