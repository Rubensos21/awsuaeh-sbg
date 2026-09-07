interface ServiceCounterProps {
  count: number;
  total: number;
  canReset: boolean;
  onReset: () => void;
}

export function ServiceCounter({ count, total, canReset, onReset }: ServiceCounterProps) {
  return (
    <div className="service-counter-row">
      <p role="status" aria-live="polite" aria-atomic="true" className="service-counter">
        <span className="sr-only">Mostrando </span>{count} / {total} servicios
      </p>
      {canReset && <button type="button" className="service-reset" onClick={onReset}>Limpiar filtros</button>}
    </div>
  );
}
