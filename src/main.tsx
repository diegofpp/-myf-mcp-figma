import { createRoot } from 'react-dom/client'
import { useState, useMemo } from 'react'
import './styles.css'
import Frontpage1 from './Frontpage1'
import Menu from './Menu'
import Reservation from './Reservation'
import About from './About'
import MenuNav from './components/MenuNav'

function App() {
  const [currentPage, setCurrentPage] = useState<'frontpage' | 'menu' | 'reservation' | 'about'>('frontpage');
  const [isMenuNavOpen, setIsMenuNavOpen] = useState(false);

  console.log('App state:', { currentPage, isMenuNavOpen });

  // Context para pasar la función de navegación a los componentes
  const navigationContext = useMemo(() => ({
    navigateToMenu: () => setCurrentPage('menu'),
    navigateToFrontpage: () => setCurrentPage('frontpage'),
    navigateToReservation: () => setCurrentPage('reservation'),
    navigateToAbout: () => setCurrentPage('about'),
    openMenuNav: () => {
      console.log('openMenuNav called!');
      setIsMenuNavOpen(true);
    },
    closeMenuNav: () => {
      console.log('closeMenuNav called!');
      setIsMenuNavOpen(false);
    }
  }), []);

  return (
    <div>
      {/* MenuNav Overlay */}
      <MenuNav 
        isOpen={isMenuNavOpen}
        onClose={navigationContext.closeMenuNav}
        onNavigateToMenu={navigationContext.navigateToMenu}
        onNavigateToReservation={navigationContext.navigateToReservation}
        onNavigateToAbout={navigationContext.navigateToAbout}
        onNavigateToFrontpage={navigationContext.navigateToFrontpage}
      />
      
      {/* Page Content */}
      {currentPage === 'frontpage' && <Frontpage1 onNavigateToMenu={navigationContext.navigateToMenu} onNavigateToReservation={navigationContext.navigateToReservation} onNavigateToAbout={navigationContext.navigateToAbout} onNavigateToFrontpage={navigationContext.navigateToFrontpage} onOpenMenuNav={navigationContext.openMenuNav} />}
      {currentPage === 'menu' && <Menu onNavigateToFrontpage={navigationContext.navigateToFrontpage} onNavigateToAbout={navigationContext.navigateToAbout} onOpenMenuNav={navigationContext.openMenuNav} />}
      {currentPage === 'reservation' && <Reservation onNavigateToFrontpage={navigationContext.navigateToFrontpage} onNavigateToMenu={navigationContext.navigateToMenu} onNavigateToAbout={navigationContext.navigateToAbout} onOpenMenuNav={navigationContext.openMenuNav} />}
      {currentPage === 'about' && <About onNavigateToFrontpage={navigationContext.navigateToFrontpage} onNavigateToMenu={navigationContext.navigateToMenu} onNavigateToAbout={navigationContext.navigateToAbout} onOpenMenuNav={navigationContext.openMenuNav} />}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <App />
)