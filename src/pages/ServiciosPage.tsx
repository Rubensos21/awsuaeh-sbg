import { useEffect, useState } from 'react';
import { SearchX } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceCounter } from '../components/services/ServiceCounter';
import { ServiceFilters } from '../components/services/ServiceFilters';
import { ServiceSearch } from '../components/services/ServiceSearch';
import { ServiceViewToggle } from '../components/services/ServiceViewToggle';
import { FilterChip } from '../components/services/FilterChip';
import { awsServices } from '../data/services';
import type { ServiceFilters as Filters, ServiceView } from '../types/services';
import { DEFAULT_SERVICE_FILTERS, filterServices } from '../utils/services';

export function ServiciosPage() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_SERVICE_FILTERS);
  const [view, setView] = useState<ServiceView>('grid');
  const services = filterServices(awsServices, filters);
  const canReset =
    filters.query !== '' ||
    filters.category !== 'todas' ||
    filters.rating !== 'todos' ||
    filters.sort !== 'popular';

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Servicios AWS | AWS SBG UAEH';
    return () => { document.title = previousTitle; };
  }, []);

  const updateFilters = (changes: Partial<Filters>) =>
    setFilters((current) => ({ ...current, ...changes }));
  const resetFilters = () => setFilters(DEFAULT_SERVICE_FILTERS);

  return (
    <div className="min-h-screen flex flex-col bg-[#161e27]">
      <Navbar currentPath="/servicios" />

      <main className="flex-1 pt-16">
        <h1 className="sr-only">Servicios AWS</h1>

        <section
          className="pt-4 border-b border-[#2b333d]"
          aria-label="Buscar y filtrar servicios AWS"
        >
          <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,3.5vw,44px)]">
            {/* Fila de búsqueda + toggle de vista */}
            <div className="flex items-center gap-2 mb-3">
              <ServiceSearch value={filters.query} onChange={(query) => updateFilters({ query })} />
              <ServiceViewToggle value={view} onChange={setView} />
            </div>

            <ServiceFilters value={filters} onChange={updateFilters} />
            <ServiceCounter
              count={services.length}
              total={awsServices.length}
              canReset={canReset}
              onReset={resetFilters}
            />
          </div>
        </section>

        <section
          className="w-full max-w-[1280px] mx-auto px-[clamp(20px,3.5vw,44px)] pt-1.5 pb-10"
          aria-label="Catálogo de servicios AWS"
        >
          <div
            id="service-results"
            className={[
              'grid gap-4',
              view === 'list'
                ? 'grid-cols-1'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-[800px]:grid-cols-2 max-[540px]:grid-cols-1 max-[540px]:gap-3',
            ].join(' ')}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} view={view} />
            ))}
          </div>

          {/* Estado vacío */}
          {services.length === 0 && (
            <div className="flex flex-col items-center gap-3.5 min-h-[300px] px-5 py-14 text-center text-[#a5adb8]">
              <SearchX size={32} aria-hidden="true" />
              <h2 className="text-xl font-bold text-white">No encontramos servicios</h2>
              <p className="text-[0.9375rem]">
                Prueba otra búsqueda o cambia los filtros seleccionados.
              </p>
              <FilterChip value="reset" selected={false} onSelect={resetFilters}>
                Limpiar filtros
              </FilterChip>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
