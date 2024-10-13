import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/App';  // Home
import { TimerFlor } from './pages/TimerFlor';
import {Sobre} from './pages/Sobre';  // Página Sobre
import {Contato} from './pages/Contato';  // Página Contato
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Rota para Home (App) */}
        <Route path="/" element={<App />} />

        {/* Rota para Sobre */}
        <Route path="/sobre" element={<Sobre />} />

        {/* Rota para Contato */}
        <Route path="/contato" element={<Contato />} />

        <Route path="/flor" element={<TimerFlor />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

