import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landpage from './pages/landpage';
import Inscricao from './pages/inscricao';
import Reservado from './pages/ingressoreservado';
import LoginAdm from './pages/adm/login-adm';
import HomeAdm from './pages/adm/home-adm';
import Verificar from './pages/adm/verificar-adm';
import ListagemAdm from './pages/adm/listar salas-adm';
import ContadorAdm from './pages/adm/contador-adm';
import { LoginContext } from "./context";
import { useContext, useState } from "react";

export default function Router()
{
    let loginInicial = useContext(LoginContext);

    function logar()
    {
        setLogin({
            logado: true,
        })
    }

    const [login, setLogin] = useState({
        logado: loginInicial.logado,
        logar 
    });

    return(
        <LoginContext.Provider value={login}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact={true} element={<Landpage/>}/>
                    <Route path='/inscricao' exact={true} element={<Inscricao/>}/>
                    <Route path='/reservado' exact={true} element={<Reservado/>}/>
                    <Route path='/adm/login' exact={true} element={<LoginAdm/>}/>
                    <Route path='/adm/verificacao' exact={true} element={<Verificar/>} />
                    <Route path='/adm/listagem' exact={true} element={<ListagemAdm/>} />
                    <Route path='/adm/contador/:salaId' exact={true} element={<ContadorAdm/>} />
                    <Route path='/adm' exact={true} element={<HomeAdm/>}/>
                </Routes>
            </BrowserRouter>
        </LoginContext.Provider>
    )
}