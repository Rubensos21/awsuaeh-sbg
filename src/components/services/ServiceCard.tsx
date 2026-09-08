import { ArrowRight, Bot, TrendingUp } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { AwsService, ServiceView } from '../../types/services';

interface ServiceCardProps {
  service: AwsService;
  view?: ServiceView;
}

export function ServiceCard({ service, view = 'grid' }: ServiceCardProps) {
  const style = {
    '--service-accent': service.colorScheme.badgeBg,
    '--service-badge-text': service.colorScheme.badgeText,
    '--service-icon-border': service.colorScheme.iconBorder ?? service.colorScheme.badgeBg,
  } as CSSProperties;

  const isList = view === 'list';

  return (
    <article
      className="min-w-0 h-full border border-[#323c47] rounded-lg bg-[#1d2732] hover:border-[var(--service-accent)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.2)] transition-[border-color,transform,box-shadow] duration-[180ms] motion-reduce:transition-none motion-reduce:hover:transform-none"
      style={style}
      aria-labelledby={`service-${service.id}`}
    >
      <a
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          'h-full rounded-[inherit] text-[#f5f7fa] no-underline',
          'focus-visible:outline-2 focus-visible:outline-[#ff9900] focus-visible:outline-offset-[3px]',
          isList
            /* Vista lista: grid de 4 columnas */
            ? 'grid grid-cols-[40px_minmax(140px,1.1fr)_minmax(0,2fr)_65px] gap-x-[18px] gap-y-1.5 items-center p-[15px] max-[800px]:grid-cols-[40px_minmax(0,1fr)_auto]'
            /* Vista cuadrícula: columna flex */
            : 'flex flex-col items-start p-[15px]',
        ].join(' ')}
      >
        {/* Icono */}
        <span
          aria-hidden="true"
          className={[
            'grid place-items-center shrink-0 w-9 h-9 border border-[var(--service-icon-border)] rounded-[5px] bg-[#29323c] text-[var(--service-accent)]',
            isList ? 'row-span-3' : 'mb-0',
          ].join(' ')}
        >
          {service.icon === 'robotics'
            ? <Bot size={26} />
            : <img src={service.icon} alt="" width={32} height={32} loading="lazy" decoding="async" className="block w-7 h-7" />}
        </span>

        {/* Score de popularidad */}
        <span
          title="Popularidad ilustrativa del catálogo; no es una clasificación oficial de AWS"
          className={[
            'inline-flex items-center gap-1 text-[#a3abb7] font-mono text-[0.6875rem] whitespace-nowrap',
            isList
              ? 'justify-self-end max-[800px]:col-start-3 max-[800px]:row-start-1'
              : 'ml-auto',
          ].join(' ')}
        >
          <TrendingUp size={14} aria-hidden="true" />
          <span className="sr-only">Popularidad de ejemplo: </span>{service.popularityScore}
          <span className="sr-only"> de 100</span>
        </span>

        {/* Badge de categoría */}
        <span
          className={[
            'inline-block max-w-full rounded-[7px] px-2 py-[2px] font-mono text-[0.5625rem] leading-[1.35] break-words',
            'bg-[var(--service-accent)] text-[var(--service-badge-text)]',
            isList
              ? 'justify-self-start max-[800px]:col-span-2'
              : 'mt-[13px]',
          ].join(' ')}
        >
          {service.categoryLabel}
        </span>

        {/* Nombre */}
        <h2
          id={`service-${service.id}`}
          className={[
            'font-mono text-[0.8125rem] font-bold leading-[1.45] break-words',
            isList ? 'mb-0 max-[800px]:col-start-2' : 'mt-[13px] mb-[5px]',
          ].join(' ')}
        >
          {service.name}
        </h2>

        {/* Descripción */}
        <p
          title={service.description}
          className={[
            'text-[#e0e5eb] text-[0.75rem] leading-[1.4] line-clamp-2',
            isList
              ? 'col-start-3 row-span-3 m-0 max-[800px]:col-span-2 max-[800px]:col-start-2'
              : 'mb-2.5',
          ].join(' ')}
        >
          {service.description}
        </p>

        {/* Ver detalle */}
        <span
          className={[
            'group/detail inline-flex items-center gap-1.5 font-mono text-[0.6875rem] leading-[1.5]',
            isList ? 'mt-1 max-[800px]:col-span-2 max-[800px]:col-start-2' : 'mt-auto',
          ].join(' ')}
        >
          Ver detalle{' '}
          <ArrowRight
            size={14}
            aria-hidden="true"
            className="text-[#a5adb8] transition-transform duration-[180ms] motion-reduce:transition-none [[href]:hover_&]:text-white [[href]:hover_&]:translate-x-[3px]"
          />
          <span className="sr-only"> de {service.name} en la documentación de AWS (abre una pestaña nueva)</span>
        </span>
      </a>
    </article>
  );
}
