import { useContext } from 'react';
import { ColeccionContext } from './ColeccionContext';

export function useColeccion() {
  const contexto = useContext(ColeccionContext);
  if (contexto === null) {
    throw new Error('useColeccion debe usarse dentro de ColeccionProvider');
  }
  return contexto;
}
