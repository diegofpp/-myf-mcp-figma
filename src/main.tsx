import { createRoot } from 'react-dom/client'
import { useState, useMemo, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import './styles.css'
import Frontpage1 from './Frontpage1'
import Menu from './Menu'
import Reservation from './Reservation'
import About from './About'
import MenuNav from './components/MenuNav'
import PixelTestComponent from './components/PixelTestComponent'
import Inner from './components/Inner'
import { MetaPixel } from './utils/metaPixel'
import { PIXEL_EVENTS } from './config/pixel'

function App() {
  const [currentPage, setCurrentPage] = useState<'frontpage' | 'menu' | 'reservation' | 'about'>('frontpage');
  const [isMenuNavOpen, setIsMenuNavOpen] = useState(false);

  console.log('App state:', { currentPage, isMenuNavOpen });

  // Configuración de Meta Pixel
  useEffect(() => {
    console.log('🔵 Inicializando Meta Pixel directamente...');
    
    try {
      MetaPixel.init();
      MetaPixel.pageView();
      
      // Verificar que fbq está disponible globalmente
      console.log('🌐 fbq disponible:', typeof window.fbq !== 'undefined');
      
    } catch (error) {
      console.error('❌ Error inicializando Meta Pixel:', error);
    }
  }, []);

  // Context para pasar la función de navegación a los componentes
  const navigationContext = useMemo(() => ({
    navigateToMenu: () => {
      setCurrentPage('menu');
      // Track evento de navegación al menú
      console.log('📊 Enviando evento ViewContent para Menu Page');
      MetaPixel.track(PIXEL_EVENTS.VIEW_CONTENT, {
        content_name: 'Menu Page',
        content_category: 'Navigation'
      });
    },
    navigateToFrontpage: () => {
      setCurrentPage('frontpage');
      // Track evento de navegación a la página principal
      MetaPixel.track(PIXEL_EVENTS.VIEW_CONTENT, {
        content_name: 'Home Page',
        content_category: 'Navigation'
      });
    },
    navigateToReservation: () => {
      setCurrentPage('reservation');
      // Track evento de navegación a reservas
      MetaPixel.track(PIXEL_EVENTS.INITIATE_CHECKOUT, {
        content_name: 'Reservation Page',
        content_category: 'Booking'
      });
    },
    navigateToAbout: () => {
      setCurrentPage('about');
      // Track evento de navegación a about
      MetaPixel.track(PIXEL_EVENTS.VIEW_CONTENT, {
        content_name: 'About Page',
        content_category: 'Navigation'
      });
    },
    openMenuNav: () => {
      console.log('openMenuNav called!');
      setIsMenuNavOpen(true);
      // Track evento de apertura del menú
      MetaPixel.track(PIXEL_EVENTS.CUSTOMIZE_PRODUCT, {
        content_name: 'Menu Navigation Opened',
        content_category: 'User Interaction'
      });
    },
    closeMenuNav: () => {
      console.log('closeMenuNav called!');
      setIsMenuNavOpen(false);
    }
  }), []);

  return (
    <div className="main">
      {/* Componente de prueba de Meta Pixel */}
      <PixelTestComponent />
      
      {/* MenuNav Overlay */}
      <MenuNav 
        isOpen={isMenuNavOpen}
        onClose={navigationContext.closeMenuNav}
        onNavigateToMenu={navigationContext.navigateToMenu}
        onNavigateToReservation={navigationContext.navigateToReservation}
        onNavigateToAbout={navigationContext.navigateToAbout}
        onNavigateToFrontpage={navigationContext.navigateToFrontpage}
      />
      
      {/* Page Content with Framer Motion Transitions */}
      <AnimatePresence mode="wait">
        {currentPage === 'frontpage' && (
          <Inner key="frontpage" backgroundColor="#0a0b0a">
            <Frontpage1 
              onNavigateToMenu={navigationContext.navigateToMenu} 
              onNavigateToReservation={navigationContext.navigateToReservation} 
              onNavigateToAbout={navigationContext.navigateToAbout} 
              onNavigateToFrontpage={navigationContext.navigateToFrontpage} 
              onOpenMenuNav={navigationContext.openMenuNav} 
            />
          </Inner>
        )}
        {currentPage === 'menu' && (
          <Inner key="menu" backgroundColor="#0a0b0a">
            <Menu 
              onNavigateToFrontpage={navigationContext.navigateToFrontpage} 
              onNavigateToAbout={navigationContext.navigateToAbout} 
              onNavigateToReservation={navigationContext.navigateToReservation}
              onOpenMenuNav={navigationContext.openMenuNav} 
            />
          </Inner>
        )}
        {currentPage === 'reservation' && (
          <Inner key="reservation" backgroundColor="#0a0b0a">
            <Reservation 
              onNavigateToFrontpage={navigationContext.navigateToFrontpage} 
              onNavigateToMenu={navigationContext.navigateToMenu} 
              onNavigateToAbout={navigationContext.navigateToAbout} 
              onOpenMenuNav={navigationContext.openMenuNav} 
            />
          </Inner>
        )}
        {currentPage === 'about' && (
          <Inner key="about" backgroundColor="#0a0b0a">
            <About 
              onNavigateToFrontpage={navigationContext.navigateToFrontpage} 
              onNavigateToMenu={navigationContext.navigateToMenu} 
              onNavigateToAbout={navigationContext.navigateToAbout} 
              onNavigateToReservation={navigationContext.navigateToReservation}
              onOpenMenuNav={navigationContext.openMenuNav} 
            />
          </Inner>
        )}
      </AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <App />
)