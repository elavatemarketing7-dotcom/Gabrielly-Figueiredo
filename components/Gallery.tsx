
import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  items: string[] | React.ReactNode[];
  type?: 'image' | 'custom';
  aspectRatio?: string;
  itemWidth?: string;
}

const Gallery: React.FC<GalleryProps> = ({ 
  items, 
  type = 'image', 
  aspectRatio = 'aspect-square',
  itemWidth = 'w-[85vw] md:w-[450px]'
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(isNaN(progress) ? 0 : progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openLightbox = (index: number) => {
    if (type === 'image') setSelectedIndex(index);
  };
  
  const closeLightbox = () => setSelectedIndex(null);

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex(prev => (prev === null || prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex(prev => (prev === null || prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative group/carousel">
      {/* Navigation Arrows - Desktop Only */}
      <button 
        onClick={() => scroll('left')}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-xl rounded-full hidden md:flex items-center justify-center text-premium-dark opacity-0 group-hover/carousel:opacity-100 transition-opacity border border-gray-100 hover:bg-premium-dark hover:text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-xl rounded-full hidden md:flex items-center justify-center text-premium-dark opacity-0 group-hover/carousel:opacity-100 transition-opacity border border-gray-100 hover:bg-premium-dark hover:text-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-10 px-4 -mx-4 cursor-grab active:cursor-grabbing"
      >
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`flex-shrink-0 ${itemWidth} ${aspectRatio} snap-center transition-all duration-500`}
            onClick={() => openLightbox(idx)}
          >
            {type === 'image' ? (
              <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl relative group/item border-4 border-white">
                <img 
                  src={item as string} 
                  alt={`Item ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-110" 
                />
                <div className="absolute inset-0 bg-premium-dark/10 group-hover/item:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity">
                   <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                      <ChevronRight className="text-white" size={24} />
                   </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full">
                {item}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar Indicator */}
      <div className="max-w-[200px] mx-auto h-1 bg-gray-100 rounded-full overflow-hidden relative">
        <div 
          className="absolute inset-y-0 left-0 bg-premium-gold transition-all duration-300 ease-out" 
          style={{ width: '30%', transform: `translateX(${scrollProgress * 2.33}%)` }}
        />
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && type === 'image' && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={closeLightbox}>
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors" onClick={closeLightbox}>
            <X size={32} />
          </button>
          
          <button className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2" onClick={prevLightbox}>
            <ChevronLeft size={48} />
          </button>
          
          <div className="max-w-4xl w-full max-h-[80vh] flex items-center justify-center">
            <img 
              src={items[selectedIndex] as string} 
              alt="Resultado Grande" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300" 
            />
          </div>

          <button className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2" onClick={nextLightbox}>
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-8 text-white/50 text-sm font-medium tracking-widest">
            {selectedIndex + 1} / {items.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
