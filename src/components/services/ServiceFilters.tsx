import { serviceCategories } from '../../data/services';
import type { ServiceFilters as Filters, SortOption } from '../../types/services';
import { FilterChip } from './FilterChip';

interface ServiceFiltersProps {
  value: Filters;
  onChange: (changes: Partial<Filters>) => void;
}

const sortOptions: readonly SortOption[] = ['popular', 'a-z', 'categoría'];

export function ServiceFilters({ value, onChange }: ServiceFiltersProps) {
  return (
    <>
      {/* Rail de categorías — scroll horizontal sin scrollbar */}
      <div
        className="flex gap-1.5 overflow-x-auto overscroll-x-contain py-[3px] px-[2px] pb-[7px] -mt-[3px] -mx-[2px] mb-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-label="Filtrar por categoría"
      >
        {serviceCategories.map((category) => (
          <FilterChip
            key={category}
            value={category}
            selected={value.category === category}
            onSelect={(category) => onChange({ category })}
          >
            <span aria-hidden="true">#</span> {category}
          </FilterChip>
        ))}
      </div>

      {/* Fila de filtros adicionales */}
      <div className="flex items-center flex-wrap gap-x-3.5 gap-y-2.5">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Ordenar servicios">
          {sortOptions.map((sort) => (
            <FilterChip
              key={sort}
              value={sort}
              selected={value.sort === sort}
              onSelect={(sort) => onChange({ sort })}
              label={`Ordenar por ${sort}`}
            >
              <span aria-hidden="true">#</span> {sort}
            </FilterChip>
          ))}
        </div>
      </div>
    </>
  );
}
