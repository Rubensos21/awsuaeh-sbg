interface ServiceCounterProps {
  count: number;
  total: number;
  canReset: boolean;
  onReset: () => void;
}

export function ServiceCounter({ count, total, canReset, onReset }: ServiceCounterProps) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-x-3 gap-y-1 min-h-10 py-2 font-mono text-[0.6875rem]">
      <p role="status" aria-live="polite" aria-atomic="true" className="text-[#a0a7b2]">
        <span className="sr-only">Mostrando </span>{count} / {total} servicios
      </p>
      {canReset && (
        <button
          type="button"
          className="text-[#e0e4eb] py-1 cursor-pointer underline-offset-4 hover:text-[#ff9900] hover:underline focus-visible:outline-2 focus-visible:outline-[#ff9900] focus-visible:outline-offset-[3px]"
          onClick={onReset}
        >
          Limpiar filtros
        </button>
      )}
    </div>
  );
}
