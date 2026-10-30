import { Link } from 'react-router';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h2>
        <Link to="/">Cinecollect</Link>
      </h2>
      <nav>
        <a href="">Mis favoritos</a>
        <Link to="/ver-despues">Ver despues</Link>
      </nav>
    </header>
  );
}
