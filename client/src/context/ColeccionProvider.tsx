import type { ReactNode } from 'react';
import { ColeccionContext } from './ColeccionContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function ColeccionProvider({ children }: { children: ReactNode }) {
  const [vistas, setVistas] = useLocalStorage<number[]>('vistas', []);
  const [verDespues, setVerDespues] = useLocalStorage<number[]>(
    'verDespues',
    [],
  );

  function marcarVista(id: number) {
    setVistas((anteriores) => [...anteriores, id]);
  }

  function agregarVerDespues(id: number) {
    setVerDespues((anteriores) => [...anteriores, id]);
  }

  return (
    <ColeccionContext
      value={{ vistas, verDespues, marcarVista, agregarVerDespues }}
    >
      {children}
    </ColeccionContext>
  );
}
