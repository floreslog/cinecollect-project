import type { Pelicula } from '../../data/peliculas';
import '../card-pelicula/CardPelicula.css';

interface CardPeliculaProps {
  pelicula: Pelicula;
}

export default function CardPelicula({ pelicula }: CardPeliculaProps) {
  return (
    <article className="pelicula-card">
      <div className="pelicula-contenido">
        <div className="pelicula-info">
          <h3>{pelicula.nombre}</h3>

          <small>
            {pelicula.duracion} min &middot; {pelicula.actores}
          </small>
        </div>

        <p>{pelicula.descripcion}</p>
      </div>

      <div className="pelicula-acciones">
        <button type="button" className="btn-ver-despues">
          Ver después
        </button>

        <button type="button" className="btn-visto">
          Ya la vi
        </button>
      </div>
    </article>
  );
}
