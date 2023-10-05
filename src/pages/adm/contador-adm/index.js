import './index.scss';
import Cabecalho from '../../../components/adm/cabecalho';

import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useState } from 'react';

import axios from 'axios';
import { LoginContext } from '../../../context';

export default function ContadorAdm() {

    const [info, setInfo] = useState([]);
    const { salaId } = useParams();

    async function informormacaoSala() {
        let url = `https://vps41771.publiccloud.com.br/pesquisar/${salaId}`
        let connect = await axios.get(url);
        setInfo(connect.data[0]);
    }

    useEffect(() => {
        informormacaoSala();
    });

    const navigate = useNavigate();
    const login = useContext(LoginContext)


    
    async function AdicionarVisitante() {
        let url = `https://vps41771.publiccloud.com.br/adicionar/${salaId}`
        await axios.put(url)
        informormacaoSala()
    }

    async function RemoverVisitante() {
        let url = `https://vps41771.publiccloud.com.br/diminuir/${salaId}`
        await axios.put(url)
        informormacaoSala()
    }


    return(
        <div className='pagina-contador'>
            <Cabecalho />

            <section className='corpo'>
                    <h2>{info.Sala}</h2>
                    <h1>{info.Descricao}</h1>

                <div className='contador'>
                    <h1>Total de Visitantes</h1>
                    <div>
                        <button onClick={RemoverVisitante}>-</button>
                        <h1 id='nr-visitantes'>{info.Quantidade_Visitantes}</h1>
                        <button onClick={AdicionarVisitante}>+</button>
                    </div>
                </div>
            </section>

            <img src="/assets/images/adm/Footer-adm.png" alt="Rodape IMG" />
        </div>
    )
}