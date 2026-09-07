import { Search, X } from 'lucide-react';
import { useRef } from 'react';

interface ServiceSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ServiceSearch({ value, onChange }: ServiceSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div role="search" className="service-search">
      <Search size={17} aria-hidden="true" />
      <label htmlFor="service-search" className="sr-only">Buscar servicios AWS</label>
      <input
        ref={inputRef}
        id="service-search"
        type="search"
        placeholder="Buscar servicios..."
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onChange('');
        }}
        aria-controls="service-results"
      />
      {value && (
        <button
          type="button"
          aria-label="Limpiar búsqueda"
          onClick={() => {
            onChange('');
            inputRef.current?.focus();
          }}
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
