export type ServiceCategory =
  | 'todas'
  | 'cómputo'
  | 'almacenamiento'
  | 'bases de datos'
  | 'redes y entrega de contenido'
  | 'seguridad, identidad y cumplimiento'
  | 'serverless'
  | 'contenedores'
  | 'machine learning'
  | 'analítica'
  | 'integración de aplicaciones'
  | 'gestión y gobernanza'
  | 'herramientas de desarrollo'
  | 'internet de las cosas'
  | 'migración y transferencia'
  | 'computación para usuarios finales'
  | 'tecnologías cuánticas'
  | 'satélite'
  | 'robótica'
  | 'web3';

export type SortOption = 'popular' | 'a-z' | 'categoría';

export type RatingFilter = 'todos' | 90 | 80 | 70;

export interface AwsService {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  description: string;
  popularityScore: number;
  icon: string;
  colorScheme: {
    badgeBg: string;
    badgeText: string;
    iconBorder?: string;
  };
  link: string;
}

export type ServiceView = 'grid' | 'list';

export interface ServiceFilters {
  query: string;
  category: ServiceCategory;
  rating: RatingFilter;
  sort: SortOption;
}
