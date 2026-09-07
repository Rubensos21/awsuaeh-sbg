import { ArrowRight, Bot, TrendingUp } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { AwsService } from '../../types/services';

interface ServiceCardProps {
  service: AwsService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const style = {
    '--service-accent': service.colorScheme.badgeBg,
    '--service-badge-text': service.colorScheme.badgeText,
    '--service-icon-border': service.colorScheme.iconBorder ?? service.colorScheme.badgeBg,
  } as CSSProperties;

  return (
    <article className="service-card" style={style} aria-labelledby={`service-${service.id}`}>
      <a href={service.link} target="_blank" rel="noopener noreferrer" className="service-card-link">
        <div className="service-card-top">
          <span className="service-icon" aria-hidden="true">
            {service.icon === 'robotics'
              ? <Bot size={26} />
              : <img src={service.icon} alt="" width={32} height={32} loading="lazy" decoding="async" />}
          </span>
          <span className="service-score" title="Popularidad ilustrativa del catálogo; no es una clasificación oficial de AWS">
            <TrendingUp size={14} aria-hidden="true" />
            <span className="sr-only">Popularidad de ejemplo: </span>{service.popularityScore}
            <span className="sr-only"> de 100</span>
          </span>
        </div>
        <span className="service-badge">{service.categoryLabel}</span>
        <h2 id={`service-${service.id}`} className="service-name">{service.name}</h2>
        <p className="service-description" title={service.description}>{service.description}</p>
        <span className="service-detail">
          Ver detalle <ArrowRight size={14} aria-hidden="true" />
          <span className="sr-only"> de {service.name} en la documentación de AWS (abre una pestaña nueva)</span>
        </span>
      </a>
    </article>
  );
}
