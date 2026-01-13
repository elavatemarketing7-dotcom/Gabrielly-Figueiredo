
import React from 'react';

const NavbarMarquee: React.FC = () => {
  const sections = [
    { id: 'hero', label: 'Início' },
    { id: 'sobre', label: 'Sobre Mim' },
    { id: 'resultados', label: 'Prova Visual' },
    { id: 'harmonizacao', label: 'Harmonização de ❤️' },
    { id: 'depoimentos', label: 'Experiências' },
    { id: 'onde', label: 'Onde nos Encontrar' },
    { id: 'contato', label: 'Contato' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const NavItems = () => (
    <div className="flex gap-16 items-center px-10 shrink-0">
      {sections.map((sec, idx) => (
        <button 
          key={idx}
          onClick={() => scrollTo(sec.id)}
          className="text-[11px] uppercase tracking-[0.4em] font-black text-premium-espresso/90 hover:text-premium-bronze transition-all flex items-center gap-3 group whitespace-nowrap"
        >
          <span className="w-2 h-2 rounded-full bg-premium-bronze/30 group-hover:bg-premium-bronze transition-colors" />
          {sec.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[95] w-[95%] max-w-6xl">
      <div className="glass-premium border-2 border-premium-bronze/20 rounded-full overflow-hidden py-4 shadow-[0_15px_30px_-5px_rgba(28,25,23,0.15)] bg-white/80">
        <div className="flex w-max animate-marquee" style={{ animationDuration: '45s' }}>
          <NavItems />
          <NavItems />
          <NavItems />
          <NavItems />
        </div>
      </div>
    </div>
  );
};

export default NavbarMarquee;
