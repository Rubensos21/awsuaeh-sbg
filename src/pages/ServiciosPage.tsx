import { useEffect, useState } from 'react';
import { SearchX } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceCounter } from '../components/services/ServiceCounter';
import { ServiceFilters } from '../components/services/ServiceFilters';
import { ServiceSearch } from '../components/services/ServiceSearch';
import { ServiceViewToggle } from '../components/services/ServiceViewToggle';
import { awsServices } from '../data/services';
import type { ServiceFilters as Filters, ServiceView } from '../types/services';
import { DEFAULT_SERVICE_FILTERS, filterServices } from '../utils/services';
import './ServiciosPage.css';

export function ServiciosPage() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_SERVICE_FILTERS);
  const [view, setView] = useState<ServiceView>('grid');
  const services = filterServices(awsServices, filters);
  const canReset = filters.query !== '' || filters.category !== 'todas' || filters.rating !== 'todos' || filters.sort !== 'popular';

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Servicios AWS | AWS SBG UAEH';
    return () => { document.title = previousTitle; };
  }, []);

  const updateFilters = (changes: Partial<Filters>) => setFilters((current) => ({ ...current, ...changes }));
  const resetFilters = () => setFilters(DEFAULT_SERVICE_FILTERS);

  return (
    <div className="services-page">
      <Navbar currentPath="/servicios" />
      <main className="services-main">
        <h1 className="sr-only">Servicios AWS</h1>
        <section className="services-toolbar" aria-label="Buscar y filtrar servicios AWS">
          <div className="services-container">
            <div className="service-search-row">
              <ServiceSearch value={filters.query} onChange={(query) => updateFilters({ query })} />
              <ServiceViewToggle value={view} onChange={setView} />
            </div>
            <ServiceFilters value={filters} onChange={updateFilters} />
            <ServiceCounter count={services.length} total={awsServices.length} canReset={canReset} onReset={resetFilters} />
          </div>
        </section>
        <section className="services-container services-results-section" aria-label="Catálogo de servicios AWS">
          <div id="service-results" className={`services-results services-results--${view}`}>
            {services.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
          {services.length === 0 && (
            <div className="services-empty">
              <SearchX size={32} aria-hidden="true" />
              <h2>No encontramos servicios</h2>
              <p>Prueba otra búsqueda o cambia los filtros seleccionados.</p>
              <button type="button" className="service-filter-chip" onClick={resetFilters}>Limpiar filtros</button>
            </div>
          )}
          <p className="services-data-note">Catálogo de ejemplo. Las puntuaciones de popularidad son ilustrativas.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
