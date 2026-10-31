import type { Pelicula } from '../../data/peliculas';
import { useColeccion } from '../../context/useColeccion';
import CardPelicula from '../card-pelicula/CardPelicula';
import './ListaPeliculas.css';

interface ListaPeliculasProps {
  peliculas: Pelicula[];
  mensajeVacio: string;
}

export default function ListaPeliculas({
  peliculas,
  mensajeVacio,
}: ListaPeliculasProps) {
  const {
    vistas,
    verDespues,
    favoritos,
    alternarVista,
    alternarVerDespues,
    alternarFavorito,
  } = useColeccion();

  return (
    <div className="lista-de-peliculas">
      {peliculas.length > 0 ? (
        peliculas.map((pelicula) => (
          <CardPelicula
            key={pelicula.id}
            pelicula={pelicula}
            vista={vistas.includes(pelicula.id)}
            enVerDespues={verDespues.includes(pelicula.id)}
            onAlternarVista={() => alternarVista(pelicula.id)}
            onAlternarVerDespues={() => alternarVerDespues(pelicula.id)}
            esFavorito={favoritos.includes(pelicula.id)}
            onAlternarFavorito={() => alternarFavorito(pelicula.id)}
          />
        ))
      ) : (
        <p>{mensajeVacio}</p>
      )}
    </div>
  );
}
