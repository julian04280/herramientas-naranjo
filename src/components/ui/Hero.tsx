import type { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="relative bg-naranjo-dark py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--color-naranjo-primary),transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-naranjo-dark via-transparent to-naranjo-accent/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left md:flex items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Precisión Industrial para el <span className="text-naranjo-accent">Maestro Joyero</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Distribuidor oficial de las mejores marcas de grabado y engaste. Encuentra las herramientas que llevarán tu arte al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a href="#catalog" className="bg-naranjo-primary hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-900/20">
              Ver Catálogo
            </a>
            <a href="#contacto" className="border-2 border-naranjo-accent/50 hover:bg-naranjo-accent hover:text-naranjo-dark text-white font-bold py-3 px-8 rounded-full transition-all">
              Saber Más
            </a>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          {/* Aquí iría una imagen representativa */}
          <div className="relative h-96 w-full flex justify-center items-center">
             <div className="w-80 h-80 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex justify-center items-center rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="/recursos/logo.jpeg" alt="Logo" className="w-48 h-48 opacity-80" />
             </div>
             <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-xl bg-naranjo-accent/10 backdrop-blur-sm -rotate-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
