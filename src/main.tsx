import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Frontpage1 from './Frontpage1'
import Menu from './Menu'

function App() {
  const [currentPage, setCurrentPage] = React.useState<'frontpage' | 'menu'>('frontpage');

  // Context para pasar la función de navegación a los componentes
  const navigationContext = React.useMemo(() => ({
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
  <React.StrictMode>
    <App />
  </React.StrictMode>
)