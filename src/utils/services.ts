import type { AwsService, ServiceFilters } from '../types/services';

export const DEFAULT_SERVICE_FILTERS: ServiceFilters = {
  query: '',
  category: 'todas',
  rating: 'todos',
  sort: 'popular',
};

const collator = new Intl.Collator('es', { sensitivity: 'base', numeric: true });

export function normalizeSearch(value: string): string {
  return value.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('es').trim();
}

export function filterServices(
  services: readonly AwsService[],
  { query, category, rating, sort }: ServiceFilters,
): AwsService[] {
  const words = normalizeSearch(query).split(/\s+/).filter(Boolean);

  return services.filter((service) => {
    if (category !== 'todas' && service.category !== category) return false;
    if (rating !== 'todos' && service.popularityScore < rating) return false;

    const searchable = normalizeSearch(
      `${service.id} ${service.name} ${service.description} ${service.category} ${service.categoryLabel}`,
    );
    return words.every((word) => searchable.includes(word));
  }).sort((a, b) => {
    if (sort === 'a-z') return collator.compare(a.name, b.name);
    if (sort === 'categoría') {
      return collator.compare(a.category, b.category) || collator.compare(a.name, b.name);
    }
    // Preserve catalog order for ties, including the first six reference cards.
    return b.popularityScore - a.popularityScore;
  });
}
