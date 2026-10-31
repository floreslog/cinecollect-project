import './Paginacion.css';

interface PaginacionProps {
  paginaActual: number;
  totalPaginas: number;
  onCambiarPagina: (pagina: number) => void;
}

export default function Paginacion({
  paginaActual,
  totalPaginas,
  onCambiarPagina,
}: PaginacionProps) {
  if (totalPaginas <= 1) return null;

  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <nav aria-label="Paginación">
      <ul className="paginacion">
        <li>
          <button
            type="button"
            aria-label="Página anterior"
            disabled={paginaActual === 1}
            onClick={() => onCambiarPagina(paginaActual - 1)}
          >
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
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
        </li>

        {paginas.map((pagina) => (
          <li key={pagina}>
            <button
              type="button"
              className={pagina === paginaActual ? 'activo' : undefined}
              aria-current={pagina === paginaActual ? 'page' : undefined}
              onClick={() => onCambiarPagina(pagina)}
            >
              {pagina}
            </button>
          </li>
        ))}

        <li>
          <button
            type="button"
            aria-label="Página siguiente"
            disabled={paginaActual === totalPaginas}
            onClick={() => onCambiarPagina(paginaActual + 1)}
          >
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
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
