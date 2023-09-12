import './index.scss';
import Cabecalho from '../../../components/adm/cabecalho';

import { useParams } from 'react-router-dom';

export default function ContadorAdm() {
    const { salaId } = useParams();

    const dadosDaSala = {
        1: 'Dados da Sala 1 do banco de dados',
        2: 'Dados da Sala 2 do banco de dados',
        3: 'Dados da Sala 3 do banco de dados',
      };

    return(
        <div className='pagina-contador'>
            <Cabecalho />

            <section className='corpo'>
                    <h2>{'sala'}</h2>
                    <h1>{'Nome Sala'}</h1>

                <div className='contador'>
                    <h1>Total de Visitantes no Momento</h1>
                    <div>
                        <button>-</button>
                        <h1 id='nr-visitantes'>{0}</h1>
                        <button>+</button>
                    </div>
                    <button id='avaliar-sala'>Avaliar Sala</button>
                </div>

                <div className='avaliacao'>
                    <h1>Avaliar</h1>
                    <div id='buttons'>
                        <button><img src="/assets/images/adm/Star.svg" alt="Star Icon" /></button>
                        <button><img src="/assets/images/adm/Star.svg" alt="Star Icon" /></button>
                        <button><img src="/assets/images/adm/Star.svg" alt="Star Icon" /></button>
                        <button><img src="/assets/images/adm/Star.svg" alt="Star Icon" /></button>
                        <button><img src="/assets/images/adm/Star.svg" alt="Star Icon" /></button>
                    </div>
                    <button id='enviar-bt'>Enviar</button>
                </div>
            </section>

            <img src="/assets/images/adm/Footer-adm.png" alt="Rodape IMG" />
        </div>
    )
}