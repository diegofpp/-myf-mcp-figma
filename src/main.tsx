import { createRoot } from 'react-dom/client'
import { useState, useMemo } from 'react'
import './styles.css'
import Frontpage1 from './Frontpage1'
import Menu from './Menu'

function App() {
  const [currentPage, setCurrentPage] = useState<'frontpage' | 'menu'>('frontpage');

  // Context para pasar la función de navegación a los componentes
  const navigationContext = useMemo(() => ({
    navigateToMenu: () => setCurrentPage('menu'),
    navigateToFrontpage: () => setCurrentPage('frontpage')
  }), []);

  return (
    <div>
      {/* Page Content */}
      {currentPage === 'frontpage' && <Frontpage1 onNavigateToMenu={navigationContext.navigateToMenu} />}
      {currentPage === 'menu' && <Menu onNavigateToFrontpage={navigationContext.navigateToFrontpage} />}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <App />
)