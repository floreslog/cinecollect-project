import type { ReactNode } from 'react';
import { ColeccionContext } from './ColeccionContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function ColeccionProvider({ children }: { children: ReactNode }) {
  const [vistas, setVistas] = useLocalStorage<number[]>('vistas', []);
  const [verDespues, setVerDespues] = useLocalStorage<number[]>(
    'verDespues',
    [],
  );

  function alternarVista(id: number) {
    setVistas((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((idGuardado) => idGuardado !== id)
        : [...anteriores, id],
    );
  }

  function alternarVerDespues(id: number) {
    setVerDespues((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((idGuardado) => idGuardado !== id)
        : [...anteriores, id],
    );
  }

  return (
    <ColeccionContext
      value={{ vistas, verDespues, alternarVista, alternarVerDespues }}
    >
      {children}
    </ColeccionContext>
  );
}
