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
      className={[
        'inline-flex justify-center items-center gap-1.5 shrink-0 min-h-7 px-3 py-[5px]',
        'border rounded-[7px] font-mono text-[0.6875rem] leading-snug whitespace-nowrap cursor-pointer',
        'transition-colors duration-150',
        'focus-visible:outline-2 focus-visible:outline-[#ff9900] focus-visible:outline-offset-[3px]',
        selected
          ? 'text-[#161d26] bg-white border-white'
          : 'text-[#c6cbd3] bg-transparent border-[#303a45] hover:text-white hover:bg-[#24303c] hover:border-[#65717e]',
      ].join(' ')}
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
