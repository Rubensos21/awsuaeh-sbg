# Directrices de Implementación: Catálogo de Servicios AWS SBG

## Interfaz 
![Interfaz](D:\VisualStudioCode\awssbg-uaeh\src\assets\imgs\servicios.png)

## Objetivo
Implementar la página de catálogo de **Servicios AWS** inspirada en el portal oficial de productos de AWS (`https://docs.aws.amazon.com/#products`) siguiendo con total fidelidad el diseño de la interfaz provista en la captura (tema oscuro, paleta de colores por servicio, sistema de filtrado multi-criterio y cuadrícula de tarjetas interactivas).

---

## 1. Modelo de Datos (`types/services.ts`)

Define la estructura de datos tipada con TypeScript para los servicios:

```typescript
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
  popularityScore: number; // Ej: 98, 97, 95
  icon: string;            // Ruta SVG o identificador de icono
  colorScheme: {
    badgeBg: string;       // Color de fondo del badge de categoría
    badgeText: string;
    iconBorder?: string;
  };
  link: string;
}