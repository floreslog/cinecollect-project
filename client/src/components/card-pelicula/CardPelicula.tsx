import type { Pelicula } from '../../data/peliculas';
import '../card-pelicula/CardPelicula.css';
import { useState } from 'react';

interface CardPeliculaProps {
  pelicula: Pelicula;
}

export default function CardPelicula({ pelicula }: CardPeliculaProps) {
  const [vista, setVista] = useState(false);
  const [verDespues, setVerDespues] = useState(false);

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
        <button
          type="button"
          className={verDespues ? 'btn-ver-despues activo' : 'btn-ver-despues'}
          disabled={verDespues}
          onClick={() => setVerDespues(true)}
        >
          {verDespues ? (
            '¡Agregado para después!'
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
              Ver después
            </>
          )}
        </button>

        <button
          type="button"
          className={vista ? 'btn-visto activo' : 'btn-visto'}
          disabled={vista}
          onClick={() => setVista(true)}
        >
          {vista ? (
            '¡Visto!'
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Ya la vi
            </>
          )}
        </button>
      </div>
    </article>
  );
}
