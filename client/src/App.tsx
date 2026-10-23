import './App.css'

export default function App() {
  return (
    <>
      <header>
        <h2>Cinecollect</h2>
        <nav>
          <a href="">Mis favoritos</a>
          <a href="">Ver despues</a>
        </nav>
      </header>

      <main className="catalogo-main">
        <h1>Busqueda de peliculas</h1>
        <p>Busca libremente tu pelicula o utiliza los filtros</p>

        <form className="form-busqueda" role="search">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>

            <input required type="text" placeholder="Buscar titulos, actores o generos..." />
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

        <div className="lista-de-peliculas">
          <article className="pelicula-card">
            <div className="pelicula-contenido">
              <div className="pelicula-info">
                <h3>The Social Network</h3>
                <small>120 min &middot; Jesse Eisenberg, Andrew Garfield, Justin Timberlake</small>
              </div>
              <p>
                Narra el origen de Facebook y las disputas legales y de amistad que
                surgieron entre sus fundadores tras su creación en Harvard.
              </p>
            </div>
            <div className="pelicula-acciones">
              <button type="button" className="btn-ver-despues">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                Ver después
              </button>
              <button type="button" className="btn-visto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                Ya la vi
              </button>
            </div>
          </article>

          <article className="pelicula-card">
            <div className="pelicula-contenido">
              <div className="pelicula-info">
                <h3>Jobs</h3>
                <small>128 min &middot; Ashton Kutcher, Josh Gad, Dermot Mulroney</small>
              </div>
              <p>
                Recorre la vida de Steve Jobs desde sus inicios trabajando en un
                garage hasta convertir a Apple en una de las compañías más
                influyentes del mundo.
              </p>
            </div>
            <div className="pelicula-acciones">
              <button type="button" className="btn-ver-despues">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                Ver después
              </button>
              <button type="button" className="btn-visto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                Ya la vi
              </button>
            </div>
          </article>

          <article className="pelicula-card">
            <div className="pelicula-contenido">
              <div className="pelicula-info">
                <h3>Código Enigma</h3>
                <small>113 min &middot; Benedict Cumberbatch, Keira Knightley</small>
              </div>
              <p>
                Alan Turing y su equipo de matemáticos se enfrentan a contrarreloj
                para descifrar el código Enigma nazi durante la Segunda Guerra
                Mundial.
              </p>
            </div>
            <div className="pelicula-acciones">
              <button type="button" className="btn-ver-despues">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                Ver después
              </button>
              <button type="button" className="btn-visto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                Ya la vi
              </button>
            </div>
          </article>

          <article className="pelicula-card">
            <div className="pelicula-contenido">
              <div className="pelicula-info">
                <h3>The Disaster Artist</h3>
                <small>104 min &middot; James Franco, Dave Franco, Seth Rogen</small>
              </div>
              <p>
                Basada en hechos reales, sigue la amistad entre Greg Sestero y
                Tommy Wiseau durante la producción de una de las películas más
                peculiares del cine.
              </p>
            </div>
            <div className="pelicula-acciones">
              <button type="button" className="btn-ver-despues">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                Ver después
              </button>
              <button type="button" className="btn-visto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                Ya la vi
              </button>
            </div>
          </article>
        </div>

        <nav>
          <ul className="paginacion">
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg></a>
            <a href="" className="activo">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg></a>
          </ul>
        </nav>
      </main>
    </>
  );
}
