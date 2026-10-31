import { peliculas } from '../../data/peliculas';
import { useColeccion } from '../../context/useColeccion';
import ListaPeliculas from '../../components/lista-peliculas/ListaPeliculas';

export default function Favoritos() {
  const { favoritos } = useColeccion();

  const peliculasFavoritas = peliculas.filter((pelicula) =>
    favoritos.includes(pelicula.id),
  );

  return (
    <main className="catalogo-main">
      <h1>Mis favoritos</h1>
      <p>Las películas que marcaste como favoritas</p>

      <ListaPeliculas
        peliculas={peliculasFavoritas}
        mensajeVacio="Todavía no tienes películas favoritas"
      />
    </main>
  );
}
