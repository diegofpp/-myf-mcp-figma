import { createRoot } from 'react-dom/client'
import { useState, useMemo } from 'react'
import './styles.css'
import Frontpage1 from './Frontpage1'
import Menu from './Menu'
import Reservation from './Reservation'

function App() {
  const [currentPage, setCurrentPage] = useState<'frontpage' | 'menu' | 'reservation'>('frontpage');

  // Context para pasar la función de navegación a los componentes
  const navigationContext = useMemo(() => ({
    navigateToMenu: () => setCurrentPage('menu'),
    navigateToFrontpage: () => setCurrentPage('frontpage'),
    navigateToReservation: () => setCurrentPage('reservation')
  }), []);

  return (
    <div>
      {/* Page Content */}
      {currentPage === 'frontpage' && <Frontpage1 onNavigateToMenu={navigationContext.navigateToMenu} onNavigateToReservation={navigationContext.navigateToReservation} />}
      {currentPage === 'menu' && <Menu onNavigateToFrontpage={navigationContext.navigateToFrontpage} />}
      {currentPage === 'reservation' && <Reservation onNavigateToFrontpage={navigationContext.navigateToFrontpage} onNavigateToMenu={navigationContext.navigateToMenu} />}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <App />
)