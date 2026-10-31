import { createContext } from 'react';

export interface ColeccionContextValue {
  vistas: number[];
  verDespues: number[];
  favoritos: number[];
  alternarVista: (id: number) => void;
  alternarVerDespues: (id: number) => void;
  alternarFavorito: (id: number) => void;
}

export const ColeccionContext = createContext<ColeccionContextValue | null>(
  null,
);
