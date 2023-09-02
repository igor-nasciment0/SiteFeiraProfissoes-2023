import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import './index.scss';

import Countdown from 'react-countdown';

export default function Landpage() {

    const diaDaFeira = new Date('September 30, 2023 09:00:00')

    const dias = ({days}) => <h3>{days}</h3>
    const horas = ({hours}) => <h3>{hours}</h3>
    const minutos = ({minutes}) => <h3>{minutes}</h3>
    const segundos = ({seconds}) => <h3>{seconds}</h3>

    return(
        <div className="pagina-landpage">
            <Cabecalho />

            <section className="sec-inicio">
                <div className="container-tela">
                    <div>
                        <h1>Te esperamos na</h1>
                        <h2>Feira de Profissões 2023</h2>
                        <Link>Inscreva-se Agora</Link>
                    </div>

                    <div className="data">
                        <h3>Dia 30</h3>
                        <h4>Setembro</h4>
                        <p>Das 09h às 15h</p>
                    </div>
                </div>
            </section>

            <section className="sec-tempo">
                <div className="container-tela">
                    <h1>Restam:</h1>

                    <div className="contador">
                        <div>
                            <Countdown date={diaDaFeira} renderer={dias}/>
                            <h4>Dias</h4>
                        </div>
                        <div>
                            <Countdown date={diaDaFeira} renderer={horas}/>
                            <h4>Horas</h4>
                        </div>
                        <div>
                            <Countdown date={diaDaFeira} renderer={minutos}/>
                            <h4>Minutos</h4>
                        </div>
                        <div>
                            <Countdown date={diaDaFeira} renderer={segundos}/>
                            <h4>Segundos</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}