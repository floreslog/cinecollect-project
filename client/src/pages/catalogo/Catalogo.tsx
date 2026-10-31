import { useState } from 'react';
import './Catalogo.css';
import { peliculas, type Pelicula } from '../../data/peliculas';
import ListaPeliculas from '../../components/lista-peliculas/ListaPeliculas';

function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function categoriaDuracion(minutos: number) {
  if (minutos < 100) return 'corta';
  if (minutos <= 120) return 'media';
  return 'larga';
}

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [genero, setGenero] = useState('');
  const [duracion, setDuracion] = useState('');
  const [plataforma, setPlataforma] = useState('');

  const termino = normalizar(busqueda.trim());

  function coincide(pelicula: Pelicula) {
    const coincideTexto =
      normalizar(pelicula.nombre).includes(termino) ||
      normalizar(pelicula.actores).includes(termino) ||
      normalizar(pelicula.genero).includes(termino);

    const coincideGenero = genero === '' || pelicula.genero === genero;
    const coincideDuracion =
      duracion === '' || categoriaDuracion(pelicula.duracion) === duracion;
    const coincidePlataforma =
      plataforma === '' || pelicula.plataforma === plataforma;

    return (
      coincideTexto && coincideGenero && coincideDuracion && coincidePlataforma
    );
  }

  const peliculasFiltradas = peliculas.filter(coincide);

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
          <select
            name="genero"
            id="genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="accion">Acción</option>
            <option value="animacion">Animación</option>
            <option value="aventura">Aventura</option>
            <option value="ciencia-ficcion">Ciencia ficción</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="fantasia">Fantasía</option>
            <option value="romance">Romance</option>
            <option value="suspenso">Suspenso</option>
            <option value="terror">Terror</option>
          </select>

          <label htmlFor="duracion">Duración:</label>
          <select
            name="duracion"
            id="duracion"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="corta">Corta</option>
            <option value="media">Media</option>
            <option value="larga">Larga</option>
          </select>

          <label htmlFor="plataforma">Plataforma:</label>
          <select
            name="plataforma"
            id="plataforma"
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
          >
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
        mensajeVacio={
          busqueda
            ? `No se encontraron películas para "${busqueda}"`
            : 'No se encontraron películas con esos filtros'
        }
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
