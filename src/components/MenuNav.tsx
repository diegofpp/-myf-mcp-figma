interface MenuNavProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToMenu?: () => void;
  onNavigateToReservation?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToFrontpage?: () => void;
}

export default function MenuNav({ 
  isOpen, 
  onClose, 
  onNavigateToMenu, 
  onNavigateToReservation, 
  onNavigateToAbout, 
  onNavigateToFrontpage 
}: MenuNavProps) {
  console.log('MenuNav render:', { isOpen });
  
  if (!isOpen) return null;

  const handleNavigation = (callback?: () => void) => {
    if (callback) {
      callback();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0b0a] box-border content-stretch flex gap-[10px] items-start p-[24px]" data-name="Menu Nav">

      <div className="bg-[#0a0b0a] border border-[rgba(239,231,210,0.15)] border-solid h-full rounded-[16px] shrink-0 w-full" />
      
      <div className="absolute content-stretch flex flex-col gap-[16px] items-center top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Menu" style={{ left: "calc(50% + 0.5px)" }}>
        {/* Top decorative element */}
        <div className="box-border content-stretch flex items-center justify-center px-0 py-[7px] relative shrink-0" data-name="Grid">
          <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[0px]">
            <div className="flex-none rotate-[315deg]">
              <div className="border border-[rgba(239,231,210,0.15)] border-solid size-[8px]" data-name="Icon" />
            </div>
          </div>
          <div className="bg-[rgba(239,231,210,0.15)] h-px shrink-0 w-[20px]" data-name="Line" />
          <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[0px]">
            <div className="flex-none rotate-[315deg]">
              <div className="border border-[rgba(239,231,210,0.15)] border-solid size-[8px]" data-name="Icon" />
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <button 
          onClick={() => handleNavigation(onNavigateToMenu)}
          className="font-['Forum:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[#efe7d2] text-[48px] text-center uppercase w-[667px] hover:text-[rgba(239,231,210,0.7)] transition-colors"
        >
          Carta
        </button>
        
        <button 
          onClick={() => handleNavigation(onNavigateToReservation)}
          className="font-['Forum:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[#efe7d2] text-[48px] text-center uppercase w-[667px] hover:text-[rgba(239,231,210,0.7)] transition-colors"
        >
          Reservas
        </button>
        
        <button 
          onClick={() => handleNavigation(onNavigateToAbout)}
          className="font-['Forum:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[#efe7d2] text-[48px] text-center uppercase w-[667px] hover:text-[rgba(239,231,210,0.7)] transition-colors"
        >
          nosotros
        </button>
        
        <button 
          className="font-['Forum:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[#efe7d2] text-[48px] text-center uppercase w-[667px] hover:text-[rgba(239,231,210,0.7)] transition-colors"
        >
          Contacto
        </button>
        
        <button 
          className="font-['Forum:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[#efe7d2] text-[48px] text-center uppercase w-[667px] hover:text-[rgba(239,231,210,0.7)] transition-colors"
        >
          Blog
        </button>

        {/* Bottom decorative element */}
        <div className="box-border content-stretch flex items-center justify-center px-0 py-[7px] relative shrink-0" data-name="Grid">
          <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[0px]">
            <div className="flex-none rotate-[315deg]">
              <div className="border border-[rgba(239,231,210,0.15)] border-solid size-[8px]" data-name="Icon" />
            </div>
          </div>
          <div className="bg-[rgba(239,231,210,0.15)] h-px shrink-0 w-[20px]" data-name="Line" />
          <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[0px]">
            <div className="flex-none rotate-[315deg]">
              <div className="border border-[rgba(239,231,210,0.15)] border-solid size-[8px]" data-name="Icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Close button */}
      <button 
        onClick={onClose}
        className="p-6 absolute top-6 left-6 text-[#efe7d2] text-2xl hover:text-[rgba(239,231,210,0.7)] transition-colors"
        aria-label="Close menu"
      >
        ×
      </button>
    </div>
  );
}
