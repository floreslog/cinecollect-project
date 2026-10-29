import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/header/Header';
import Inicio from './pages/inicio/Inicio';
import Catalogo from './pages/catalogo/Catalogo';

export default function App() {
  const [vistas, setVistas] = useState<number[]>([]);
  const [verDespues, setVerDespues] = useState<number[]>([]);

  function marcarVista(id: number) {
    setVistas((anteriores) => [...anteriores, id]);
  }

  function agregarVerDespues(id: number) {
    setVerDespues((anteriores) => [...anteriores, id]);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/catalogo"
          element={
            <Catalogo
              vistas={vistas}
              verDespues={verDespues}
              onMarcarVista={marcarVista}
              onAgregarVerDespues={agregarVerDespues}
            />
          }
        />
      </Routes>
    </>
  );
}
