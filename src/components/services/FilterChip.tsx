import type { ReactNode } from 'react';

interface FilterChipProps<T extends string | number> {
  value: T;
  selected: boolean;
  onSelect: (value: T) => void;
  children: ReactNode;
  label?: string;
}

export function FilterChip<T extends string | number>({
  value, selected, onSelect, children, label,
}: FilterChipProps<T>) {
  return (
    <button
      type="button"
      className="service-filter-chip"
      aria-pressed={selected}
      aria-label={label}
      aria-controls="service-results"
      onClick={() => onSelect(value)}
      onFocus={(event) => {
        if (event.currentTarget.matches(':focus-visible')) {
          event.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
      }}
    >
      {children}
    </button>
  );
}
