import { Star } from 'lucide-react';
import { serviceCategories } from '../../data/services';
import type { RatingFilter, ServiceFilters as Filters, SortOption } from '../../types/services';
import { FilterChip } from './FilterChip';

interface ServiceFiltersProps {
  value: Filters;
  onChange: (changes: Partial<Filters>) => void;
}

const sortOptions: readonly SortOption[] = ['popular', 'a-z', 'categoría'];
const ratingOptions: readonly RatingFilter[] = ['todos', 90, 80, 70];

export function ServiceFilters({ value, onChange }: ServiceFiltersProps) {
  return (
    <>
      <div className="service-category-rail" role="group" aria-label="Filtrar por categoría">
        {serviceCategories.map((category) => (
          <FilterChip key={category} value={category} selected={value.category === category} onSelect={(category) => onChange({ category })}>
            <span aria-hidden="true">#</span> {category}
          </FilterChip>
        ))}
      </div>
      <div className="service-filter-row">
        <div className="service-chip-group" role="group" aria-label="Ordenar servicios">
          {sortOptions.map((sort) => (
            <FilterChip key={sort} value={sort} selected={value.sort === sort} onSelect={(sort) => onChange({ sort })} label={`Ordenar por ${sort}`}>
              <span aria-hidden="true">#</span> {sort}
            </FilterChip>
          ))}
        </div>
        <div className="service-chip-group" role="group" aria-label="Filtrar por popularidad mínima">
          {ratingOptions.map((rating) => (
            <FilterChip key={rating} value={rating} selected={value.rating === rating} onSelect={(rating) => onChange({ rating })} label={rating === 'todos' ? 'Todas las puntuaciones' : `Popularidad de ${rating} o más`}>
              {rating === 'todos' ? 'todos' : <><Star size={12} fill="currentColor" aria-hidden="true" /> {rating}+</>}
            </FilterChip>
          ))}
        </div>
      </div>
    </>
  );
}
