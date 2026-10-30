import type { Pelicula } from '../../data/peliculas';
import CardPelicula from '../card-pelicula/CardPelicula';
import './ListaPeliculas.css';

interface ListaPeliculasProps {
  peliculas: Pelicula[];
  vistas: number[];
  verDespues: number[];
  onMarcarVista: (id: number) => void;
  onAgregarVerDespues: (id: number) => void;
  mensajeVacio: string;
}

export default function ListaPeliculas({
  peliculas,
  vistas,
  verDespues,
  onMarcarVista,
  onAgregarVerDespues,
  mensajeVacio,
}: ListaPeliculasProps) {
  return (
    <div className="lista-de-peliculas">
      {peliculas.length > 0 ? (
        peliculas.map((pelicula) => (
          <CardPelicula
            key={pelicula.id}
            pelicula={pelicula}
            vista={vistas.includes(pelicula.id)}
            enVerDespues={verDespues.includes(pelicula.id)}
            onMarcarVista={() => onMarcarVista(pelicula.id)}
            onAgregarVerDespues={() => onAgregarVerDespues(pelicula.id)}
          />
        ))
      ) : (
        <p>{mensajeVacio}</p>
      )}
    </div>
  );
}
