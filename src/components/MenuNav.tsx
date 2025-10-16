import { motion, AnimatePresence } from 'framer-motion';
import { menuNavOverlay, menuNavContent, menuNavItems, menuNavItem } from '../animations/pageTransitions';

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

  const handleNavigation = (callback?: () => void) => {
    if (callback) {
      callback();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-[#0a0b0a] pointer-events-auto" 
          data-name="Menu Nav"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={menuNavOverlay}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute inset-0 bg-[#0a0b0a] border border-[rgba(239,231,210,0.15)] border-solid rounded-[16px]"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={menuNavContent}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          />
          
          {/* Menú centrado con animaciones internas */}
          <div className="absolute flex flex-col gap-[16px] items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-[16px] items-center"
            >
              {/* Top decorative element */}
              <motion.div 
                className="box-border content-stretch flex items-center justify-center px-0 py-[7px] relative shrink-0" 
                data-name="Grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              >
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
              </motion.div>

              {/* Navigation Items */}
              <motion.button 
                onClick={() => handleNavigation(onNavigateToMenu)}
                className="font-['Forum:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[#efe7d2] text-[48px] text-center uppercase w-[667px] hover:text-[rgba(239,231,210,0.7)] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Carta
              </motion.button>
              
              <motion.button 
                onClick={() => handleNavigation(onNavigateToReservation)}
                className="font-['Forum:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[#efe7d2] text-[48px] text-center uppercase w-[667px] hover:text-[rgba(239,231,210,0.7)] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reservas
              </motion.button>
              
              <motion.button 
                onClick={() => handleNavigation(onNavigateToAbout)}
                className="font-['Forum:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[#efe7d2] text-[48px] text-center uppercase w-[667px] hover:text-[rgba(239,231,210,0.7)] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                nosotros
              </motion.button>
              
              <motion.button 
                className="font-['Forum:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[#efe7d2] text-[48px] text-center uppercase w-[667px] hover:text-[rgba(239,231,210,0.7)] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contacto
              </motion.button>
              
              <motion.button 
                className="font-['Forum:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[#efe7d2] text-[48px] text-center uppercase w-[667px] hover:text-[rgba(239,231,210,0.7)] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Blog
              </motion.button>

              {/* Bottom decorative element */}
              <motion.div 
                className="box-border content-stretch flex items-center justify-center px-0 py-[7px] relative shrink-0" 
                data-name="Grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
              >
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
              </motion.div>
            </motion.div>
          </div>

          {/* Close button */}
          <motion.button 
            onClick={onClose}
            className="p-6 absolute top-6 left-6 text-[#efe7d2] text-2xl hover:text-[rgba(239,231,210,0.7)] transition-colors"
            aria-label="Close menu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ×
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
