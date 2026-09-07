import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { SobreNosotrosPage } from './pages/SobreNosotrosPage';
import { BeneficiosPage } from './pages/BeneficiosPage';
import { EquipoPage } from './pages/EquipoPage';
import { EventosPage } from './pages/EventosPage';
import { ServiciosPage } from './pages/ServiciosPage';

function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('locationchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);

  if (currentPath === '/servicios' || currentPath === '/servicios/') {
    return <ServiciosPage />;
  }

  if (currentPath.includes('nosotros')) {
    return <SobreNosotrosPage />;
  }

  if (currentPath.includes('beneficios')) {
    return <BeneficiosPage />;
  }

  if (currentPath.includes('equipo')) {
    return <EquipoPage />;
  }

  if (currentPath.includes('eventos')) {
    return <EventosPage />;
  }

  return <HomePage />;
}

export default App;
