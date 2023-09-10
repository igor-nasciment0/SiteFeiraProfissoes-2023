import './index.scss';
import {Link} from 'react-router-dom';

export default function AdmHeader(){

    return(
        
        <header className='cabecalho-adm'>

            <div> </div>
            <h1>VOCÊ ESTÁ LOGADO COMO ADMINISTRADOR DA FEIRA</h1>
            <h2>BEM-VINDO @USER</h2>
        </header>
    );
}