import { peliculas } from '../../data/peliculas';
import ListaPeliculas from '../../components/lista-peliculas/ListaPeliculas';

interface VerDespuesProps {
  vistas: number[];
  verDespues: number[];
  onMarcarVista: (id: number) => void;
  onAgregarVerDespues: (id: number) => void;
}

export default function VerDespues({
  vistas,
  verDespues,
  onMarcarVista,
  onAgregarVerDespues,
}: VerDespuesProps) {
  const peliculasVerDespues = peliculas.filter((pelicula) =>
    verDespues.includes(pelicula.id),
  );

  return (
    <main className="catalogo-main">
      <h1>Ver después</h1>
      <p>Las películas que guardaste para ver más tarde</p>

      <ListaPeliculas
        peliculas={peliculasVerDespues}
        vistas={vistas}
        verDespues={verDespues}
        onMarcarVista={onMarcarVista}
        onAgregarVerDespues={onAgregarVerDespues}
        mensajeVacio="Todavía no agregas películas para ver después"
      />
    </main>
  );
}
