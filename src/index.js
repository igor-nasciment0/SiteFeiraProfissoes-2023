import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landpage from './pages/landpage';
import Inscricao from './pages/inscricao';
import Reservado from './pages/ingressoreservado';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landpage/>}/>
        <Route path='/inscricao' element={<Inscricao/>}/>
        <Route path='/reservado' element={<Reservado/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);