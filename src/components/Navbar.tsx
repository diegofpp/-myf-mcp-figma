import { useState } from 'react';

interface NavbarProps {
  onNavigateToMenu?: () => void;
  variant?: 'main' | 'menu';
  className?: string;
  sticky?: boolean;
}

export default function Navbar({ onNavigateToMenu, variant = 'main', className = '', sticky = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const positionClasses = sticky 
    ? 'sticky top-4 z-50 left-1/2 -translate-x-1/2 desktop:left-12 desktop:translate-x-0' 
    : 'absolute left-1/2 top-4 -translate-x-1/2 desktop:left-12 desktop:translate-x-0';

  return (
    <div className={`flex ${positionClasses} items-center gap-3 bg-[#0a0b0a] p-2 rounded-xl max-w-[calc(100vw-24px)] ${className}`}>
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
