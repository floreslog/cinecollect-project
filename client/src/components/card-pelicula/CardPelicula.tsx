import type { Pelicula } from '../../data/peliculas';
import './CardPelicula.css';

interface CardPeliculaProps {
  pelicula: Pelicula;
  vista: boolean;
  enVerDespues: boolean;
  esFavorito: boolean;
  onAlternarVista: () => void;
  onAlternarVerDespues: () => void;
  onAlternarFavorito: () => void;
}

export default function CardPelicula({
  pelicula,
  vista,
  enVerDespues,
  esFavorito,
  onAlternarVista,
  onAlternarVerDespues,
  onAlternarFavorito,
}: CardPeliculaProps) {
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
          className={esFavorito ? 'btn-favorito activo' : 'btn-favorito'}
          aria-pressed={esFavorito}
          aria-label={
            esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'
          }
          title={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          onClick={onAlternarFavorito}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={esFavorito ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </button>
        <button
          type="button"
          className={
            enVerDespues ? 'btn-ver-despues activo' : 'btn-ver-despues'
          }
          aria-pressed={enVerDespues}
          title={enVerDespues ? 'Quitar de ver después' : undefined}
          onClick={onAlternarVerDespues}
        >
          {enVerDespues ? (
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
          aria-pressed={vista}
          title={vista ? 'Desmarcar como vista' : undefined}
          onClick={onAlternarVista}
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
