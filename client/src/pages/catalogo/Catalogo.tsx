import { useState } from 'react';
import './Catalogo.css';
import { peliculas } from '../../data/peliculas';
import ListaPeliculas from '../../components/lista-peliculas/ListaPeliculas';

function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

interface CatalogoProps {
  vistas: number[];
  verDespues: number[];
  onMarcarVista: (id: number) => void;
  onAgregarVerDespues: (id: number) => void;
}

export default function Catalogo({
  vistas,
  verDespues,
  onMarcarVista,
  onAgregarVerDespues,
}: CatalogoProps) {
  const [busqueda, setBusqueda] = useState('');

  const termino = normalizar(busqueda.trim());
  const peliculasFiltradas = peliculas.filter(
    (pelicula) =>
      normalizar(pelicula.nombre).includes(termino) ||
      normalizar(pelicula.actores).includes(termino),
  );
  return (
    <main className="catalogo-main">
      <h1>Busqueda de peliculas</h1>
      <p>Busca libremente tu pelicula o utiliza los filtros</p>

      <form
        className="form-busqueda"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="campo-busqueda">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input
            type="text"
            placeholder="Buscar titulos, actores o generos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="busqueda-filtros">
          <label htmlFor="genero">Género:</label>
          <select name="genero" id="genero">
            <option value="">Todos</option>
            <option value="terror">Terror</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
          </select>

          <label htmlFor="duracion">Duración:</label>
          <select name="duracion" id="duracion">
            <option value="">Todos</option>
            <option value="corta">Corta</option>
            <option value="media">Media</option>
            <option value="larga">Larga</option>
          </select>

          <label htmlFor="plataforma">Plataforma:</label>
          <select name="plataforma" id="plataforma">
            <option value="">Todos</option>
            <option value="netflix">Netflix</option>
            <option value="prime-video">Prime Video</option>
            <option value="hbo">HBO</option>
            <option value="disney-plus">Disney+</option>
          </select>
        </div>
      </form>

      <ListaPeliculas
        peliculas={peliculasFiltradas}
        vistas={vistas}
        verDespues={verDespues}
        onMarcarVista={onMarcarVista}
        onAgregarVerDespues={onAgregarVerDespues}
        mensajeVacio={`No se encontraron películas para "${busqueda}"`}
      />

      <nav>
        <ul className="paginacion">
          <a href="">
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </a>
          <a href="" className="activo">
            1
          </a>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">4</a>
          <a href="">5</a>
          <a href="">
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>
        </ul>
      </nav>
    </main>
  );
}
