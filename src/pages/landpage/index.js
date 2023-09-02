import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import './index.scss';

export default function Landpage() {
    return(
        <div className="pagina-landpage">
            <Cabecalho />

            <section className="sec-inicio">
                <div className="container-inicio">
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
        </div>
    )
}