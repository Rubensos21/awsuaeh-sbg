import { LayoutGrid, List } from 'lucide-react';
import type { ServiceView } from '../../types/services';

interface ServiceViewToggleProps {
  value: ServiceView;
  onChange: (value: ServiceView) => void;
}

export function ServiceViewToggle({ value, onChange }: ServiceViewToggleProps) {
  return (
    <div
      className="flex items-center gap-[3px] h-9 p-1 border border-[#303a45] rounded-lg"
      role="group"
      aria-label="Vista de servicios"
    >
      <button
        type="button"
        aria-label="Vista de cuadrícula"
        aria-pressed={value === 'grid'}
        aria-controls="service-results"
        onClick={() => onChange('grid')}
        className={[
          'grid place-items-center w-[27px] h-[26px] rounded-[5px] cursor-pointer transition-colors duration-150',
          'focus-visible:outline-2 focus-visible:outline-[#ff9900] focus-visible:outline-offset-[3px]',
          value === 'grid'
            ? 'bg-[#283440] text-white'
            : 'text-[#a5acb7] hover:text-white hover:bg-[#303a45]',
        ].join(' ')}
      >
        <LayoutGrid size={17} aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Vista de lista"
        aria-pressed={value === 'list'}
        aria-controls="service-results"
        onClick={() => onChange('list')}
        className={[
          'grid place-items-center w-[27px] h-[26px] rounded-[5px] cursor-pointer transition-colors duration-150',
          'focus-visible:outline-2 focus-visible:outline-[#ff9900] focus-visible:outline-offset-[3px]',
          value === 'list'
            ? 'bg-[#283440] text-white'
            : 'text-[#a5acb7] hover:text-white hover:bg-[#303a45]',
        ].join(' ')}
      >
        <List size={17} aria-hidden="true" />
      </button>
    </div>
  );
}
