import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigateToMenu?: () => void;
  variant?: 'main' | 'menu';
  className?: string;
}

export default function Navbar({ onNavigateToMenu, variant = 'main', className = '' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detectar scroll y tamaño de pantalla
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    // Verificar tamaño inicial
    handleResize();

    // Agregar event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (variant === 'menu') {
    return (
      <div className={`flex gap-2 items-center justify-center p-2 rounded-xl w-full ${className}`}>
        <div className="flex gap-1 items-center justify-center grow">
          <div className="relative rounded-lg">
            <div className="flex items-center justify-center px-3 py-2">
              <span className="text-[#efe7d2] text-[12px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
                entradas
              </span>
            </div>
            <div aria-hidden className="absolute inset-0 rounded-lg border border-[rgba(239,231,210,0.15)]" />
          </div>
          <div className="relative rounded-lg">
            <div className="flex items-center justify-center px-3 py-2">
              <span className="text-[#efe7d2] text-[12px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
                fondos
              </span>
            </div>
            <div aria-hidden className="absolute inset-0 rounded-lg border border-[rgba(239,231,210,0.15)]" />
          </div>
          <div className="relative rounded-lg">
            <div className="flex items-center justify-center px-3 py-2">
              <span className="text-[#efe7d2] text-[12px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
                postres
              </span>
            </div>
            <div aria-hidden className="absolute inset-0 rounded-lg border border-[rgba(239,231,210,0.15)]" />
          </div>
        </div>
      </div>
    );
  }

  // Determinar clases de posición basadas en scroll y tamaño de pantalla
  const getPositionClasses = () => {
    if (variant === 'main' && isSmallScreen && isScrolled) {
      return 'fixed top-4 left-1/2 -translate-x-1/2 z-50';
    }
    return 'absolute left-1/2 top-4 -translate-x-1/2 desktop:left-12 desktop:translate-x-0';
  };

  // Determinar clases de fondo basadas en scroll
  const getBackgroundClasses = () => {
    if (variant === 'main' && isSmallScreen && isScrolled) {
      return 'bg-[#0a0b0a]/95 backdrop-blur-sm border border-[rgba(239,231,210,0.1)]';
    }
    return 'bg-[#0a0b0a]';
  };

  return (
    <div className={`flex ${getPositionClasses()} items-center gap-3 ${getBackgroundClasses()} p-2 rounded-xl max-w-[calc(100vw-24px)] transition-all duration-300 ${className}`}>
      {/* Hamburger Menu */}
      <div className="size-[41px] rounded-lg bg-[rgba(24,24,24,0.5)] relative flex items-center justify-center">
        <button 
          onClick={handleMenuToggle}
          className="w-5 space-y-[5px] flex flex-col items-center justify-center"
        >
          <div className="h-px bg-[#efe7d2] w-full" />
          <div className="h-px bg-[#efe7d2] w-full" />
          <div className="h-px bg-[#efe7d2] w-full" />
        </button>
        <div aria-hidden className="absolute inset-0 rounded-lg border border-[rgba(239,231,210,0.15)]" />
      </div>

      {/* Logo */}
      <div className="h-4 w-[105px] mobile:w-[110px] mobile:h-[17px] relative">
        <img alt="Logo" src="/assets/c15684d9f699e9cb7f13e344a73d68b7fecee5fb.svg" className="absolute inset-0 h-full w-full" />
      </div>

      {/* Navigation Items */}
      <div className="flex items-center gap-1 mobile:gap-0.5">
        <button 
          onClick={onNavigateToMenu}
          className="hidden tablet:block px-2 mobile:px-1.5 py-2 rounded-lg hover:bg-[rgba(24,24,24,0.3)] transition-colors"
        > 
          <span className="text-[#efe7d2] text-[12px] mobile:text-[10px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>carta</span>
        </button>
        <div className="hidden tablet:block px-2 mobile:px-1.5 py-2 rounded-lg">
          <span className="text-[#efe7d2] text-[12px] mobile:text-[10px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>nosotros</span>
        </div>
        <div className="relative rounded-lg bg-[rgba(24,24,24,0.5)] px-2 mobile:px-1.5 py-2">
          <span className="text-[#efe7d2] text-[12px] mobile:text-[10px] tracking-[1px] uppercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>reservar</span>
          <div aria-hidden className="absolute inset-0 rounded-lg border border-[rgba(239,231,210,0.15)]" />
        </div>
      </div>
    </div>
  );
}
