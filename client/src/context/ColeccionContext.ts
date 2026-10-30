import { createContext } from 'react';

export interface ColeccionContextValue {
  vistas: number[];
  verDespues: number[];
  marcarVista: (id: number) => void;
  agregarVerDespues: (id: number) => void;
}

export const ColeccionContext = createContext<ColeccionContextValue | null>(
  null,
);
