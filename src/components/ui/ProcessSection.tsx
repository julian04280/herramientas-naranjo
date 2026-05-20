import type { FC } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Preparación de Máxima Precisión",
    description: "Nuestras herramientas de medición y corte aseguran que cada gramo de metal sea tratado con la exactitud que requiere la alta joyería.",
    image: "/recursos/fundicion_2.jpeg"
  },
  {
    id: 2,
    title: "Control Térmico Profesional",
    description: "Sistemas de fundición y crisoles diseñados para soportar las más altas exigencias, permitiendo un metal líquido perfecto para el vaciado.",
    image: "/recursos/fundicion_5.jpeg"
  },
  {
    id: 3,
    title: "Moldeado de Alta Definición",
    description: "Logra detalles imposibles con nuestros sistemas de fijación y grabado que permiten un control absoluto sobre la pieza final.",
    image: "/recursos/fundicion_7.jpeg"
  },
  {
    id: 4,
    title: "El Toque del Maestro",
    description: "Buriles C-Max y sistemas GRS que transforman una pieza fundida en una obra de arte con acabados de nivel internacional.",
    image: "/recursos/fundicion_12.jpg"
  }
];

const ProcessSection: FC = () => {
  return (
    <section className="py-24 bg-naranjo-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Equipamiento para Resultados de Élite</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">Las herramientas que definen el estándar en la industria de la joyería.</p>
          <div className="w-24 h-1 bg-naranjo-accent mx-auto mt-6"></div>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-naranjo-primary/20 rounded-3xl blur-2xl group-hover:bg-naranjo-primary/30 transition-all"></div>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="relative rounded-3xl w-full h-[400px] object-cover shadow-2xl border border-white/5 transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 w-16 h-16 bg-naranjo-accent text-naranjo-dark rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl">
                    0{step.id}
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">{step.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {step.description}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-0.5 w-12 bg-naranjo-primary"></div>
                  <span className="text-naranjo-primary font-bold tracking-widest uppercase text-sm">Excelencia Técnica</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
