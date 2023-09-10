import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return(
        <header className="cabecalho-usuario">
            <div className="header-desktop">
                <div className="container-logo">
             
                    <Link to={'/'}><img src="/assets/images/logo.png" alt="Logo do Instituto" /></Link>
                </div> 

                <h1>Feira das Profissões 2023</h1>

                <h2>Instituto Social Nossa Senhora de Fátima</h2>
            </div>

            <div className="header-mobile">
                <div className="container-logo">
                    <img src="/assets/images/logo.png" alt="Logo do Instituto" />
                </div> 

                <div>
                    <h1>Feira das Profissões 2023</h1>

                    <h2>Instituto Social Nossa Senhora de Fátima</h2>
                </div>
            </div>
        </header>
    )
}