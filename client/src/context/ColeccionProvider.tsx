import type { ReactNode } from 'react';
import { ColeccionContext } from './ColeccionContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

function alternarId(lista: number[], id: number) {
  return lista.includes(id)
    ? lista.filter((idGuardado) => idGuardado !== id)
    : [...lista, id];
}

export function ColeccionProvider({ children }: { children: ReactNode }) {
  const [vistas, setVistas] = useLocalStorage<number[]>('vistas', []);
  const [verDespues, setVerDespues] = useLocalStorage<number[]>(
    'verDespues',
    [],
  );
  const [favoritos, setFavoritos] = useLocalStorage<number[]>('favoritos', []);

  function alternarVista(id: number) {
    setVistas((anteriores) => alternarId(anteriores, id));
  }

  function alternarVerDespues(id: number) {
    setVerDespues((anteriores) => alternarId(anteriores, id));
  }

  function alternarFavorito(id: number) {
    setFavoritos((anteriores) => alternarId(anteriores, id));
  }

  return (
    <ColeccionContext
      value={{
        vistas,
        verDespues,
        favoritos,
        alternarVista,
        alternarVerDespues,
        alternarFavorito,
      }}
    >
      {children}
    </ColeccionContext>
  );
}
