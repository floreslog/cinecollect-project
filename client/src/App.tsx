import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/header/Header';
import Inicio from './pages/inicio/Inicio';
import Catalogo from './pages/catalogo/Catalogo';
import VerDespues from './pages/ver-despues/VerDespues';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/ver-despues" element={<VerDespues />} />
      </Routes>
    </>
  );
}
