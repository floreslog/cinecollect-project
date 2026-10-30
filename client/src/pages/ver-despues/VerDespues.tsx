import { peliculas } from '../../data/peliculas';
import { useColeccion } from '../../context/useColeccion';
import ListaPeliculas from '../../components/lista-peliculas/ListaPeliculas';

export default function VerDespues() {
  const { verDespues } = useColeccion();

  const peliculasVerDespues = peliculas.filter((pelicula) =>
    verDespues.includes(pelicula.id),
  );

  return (
    <main className="catalogo-main">
      <h1>Ver después</h1>
      <p>Las películas que guardaste para ver más tarde</p>

      <ListaPeliculas
        peliculas={peliculasVerDespues}
        mensajeVacio="Todavía no agregas películas para ver después"
      />
    </main>
  );
}
