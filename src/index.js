import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landpage from './pages/landpage';
import Inscricao from './pages/inscricao';
import Reservado from './pages/ingressoreservado';
import LoginAdm from './pages/adm/login-adm';
import HomeAdm from './pages/adm/home-adm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact={true} element={<Landpage/>}/>
        <Route path='/inscricao' exact={true} element={<Inscricao/>}/>
        <Route path='/reservado' exact={true} element={<Reservado/>}/>
        <Route path='/adm/login' exact={true} element={<LoginAdm/>}/>
        <Route path='/adm' exact={true} element={<HomeAdm/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);