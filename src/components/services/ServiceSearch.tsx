import { Search, X } from 'lucide-react';
import { useRef } from 'react';

interface ServiceSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ServiceSearch({ value, onChange }: ServiceSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      role="search"
      className="flex items-center gap-2.5 flex-1 min-w-0 h-9 px-3 text-[#9299a5] bg-[#1d2732] border border-[#303a45] rounded-lg focus-within:border-[#ff9900] focus-within:shadow-[0_0_0_2px_#ff990025] transition-[border-color,box-shadow] duration-150"
    >
      <Search size={17} className="shrink-0" aria-hidden="true" />
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
        className="w-full min-w-0 h-full text-[#f5f7fa] font-mono text-[0.8125rem] outline-none bg-transparent placeholder:text-[#9299a5] [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          aria-label="Limpiar búsqueda"
          onClick={() => {
            onChange('');
            inputRef.current?.focus();
          }}
          className="grid place-items-center shrink-0 w-7 h-7 rounded cursor-pointer hover:text-white hover:bg-[#303a45] focus-visible:outline-2 focus-visible:outline-[#ff9900] focus-visible:outline-offset-[3px]"
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
