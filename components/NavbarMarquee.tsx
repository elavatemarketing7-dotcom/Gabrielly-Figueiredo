
import React from 'react';

const NavbarMarquee: React.FC = () => {
  const sections = [
    { id: 'hero', label: 'Início' },
    { id: 'sobre', label: 'Dra. Gabrielly' },
    { id: 'resultados', label: 'Portfólio' },
    { id: 'harmonizacao', label: 'Estética' },
    { id: 'depoimentos', label: 'Experiências' },
    { id: 'onde', label: 'Visite-nos' },
    { id: 'contato', label: 'Agendar' },
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
          className="text-[10px] uppercase tracking-[0.4em] font-bold text-premium-espresso/40 hover:text-premium-bronze transition-all flex items-center gap-2 group whitespace-nowrap"
        >
          <span className="w-1.5 h-px bg-premium-bronze scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          {sec.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[95] w-[92%] max-w-5xl">
      <div className="glass-light border border-premium-bronze/10 rounded-2xl overflow-hidden py-5 shadow-sm">
        <div className="flex w-max animate-marquee">
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
