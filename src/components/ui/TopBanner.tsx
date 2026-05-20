import type { FC } from 'react';

const TopBanner: FC = () => {
  return (
    <div className="w-full h-12 md:h-16 bg-naranjo-dark overflow-hidden relative">
      <img 
        src="/recursos/standard-melting-point-of-gold.jpg" 
        alt="Gold texture banner" 
        className="w-full h-full object-cover opacity-60 scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-naranjo-dark via-transparent to-naranjo-dark"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center space-x-4 md:space-x-8 animate-pulse-slow">
          <span className="text-naranjo-accent text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Calidad GRS</span>
          <div className="w-1 h-1 bg-white/30 rounded-full"></div>
          <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Herramientas de Precisión</span>
          <div className="w-1 h-1 bg-white/30 rounded-full"></div>
          <span className="text-naranjo-accent text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Sistemas JURA</span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
