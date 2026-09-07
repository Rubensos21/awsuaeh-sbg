import { LayoutGrid, List } from 'lucide-react';
import type { ServiceView } from '../../types/services';

interface ServiceViewToggleProps {
  value: ServiceView;
  onChange: (value: ServiceView) => void;
}

export function ServiceViewToggle({ value, onChange }: ServiceViewToggleProps) {
  return (
    <div className="service-view-toggle" role="group" aria-label="Vista de servicios">
      <button type="button" aria-label="Vista de cuadrícula" aria-pressed={value === 'grid'} onClick={() => onChange('grid')} aria-controls="service-results">
        <LayoutGrid size={17} aria-hidden="true" />
      </button>
      <button type="button" aria-label="Vista de lista" aria-pressed={value === 'list'} onClick={() => onChange('list')} aria-controls="service-results">
        <List size={17} aria-hidden="true" />
      </button>
    </div>
  );
}
