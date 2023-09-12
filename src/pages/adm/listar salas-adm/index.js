import './index.scss';
import Cabecalho from '../../../components/adm/cabecalho';

import { Link } from 'react-router-dom';

export default function ListagemAdm() {

    return (
        <div className='pagina-contador-adm'>
            <Cabecalho />

            <article className='corpo'>
                <section className='salas'>
                    <h1>Verificar Salas</h1>

                    <section className='blocos'>
                        <div>
                            <h1>Pátio</h1>
                            <Link to='/adm/contador/1'>
                                Ótica Brauzo
                                <span>SALA 4</span>
                            </Link>
                            <Link to='/adm/contador/2'>
                                Apresentação de Cursos
                                <span>SALA 5</span>
                            </Link>
                            <Link to='/adm/contador/3'>
                                Bate papo sobre as escolhas de profissoes
                                <span>SALA 6</span>
                            </Link>
                        </div>
                        <div>
                            <h1>1° Andar</h1>
                            <Link to='/'>
                                Posto de Saúde
                                <span>SALA 17</span>
                            </Link>
                            <Link to='/'>
                                ADM - RH e POC
                                <span>SALA 18</span>
                            </Link>
                            <Link to='/'>
                                ADM - Empreendedorismo e Logística
                                <span>SALA 19</span>
                            </Link>
                        </div>
                    </section>

                    <section className='blocos'>
                        <div>
                            <h1>2° Andar</h1>
                            <Link to='/'>
                                Comunicação Visual
                                <span>SALA 24</span>
                            </Link>
                            <Link to='/'>
                                Informática - Montagem, Configuração e Redes
                                <span>SALA 25</span>
                            </Link>
                            <Link to='/'>
                                Informatica - Programação
                                <span>SALA 26</span>
                            </Link>
                        </div>
                        <div>
                            <h1>3° Andar</h1>
                            <Link to='/'>
                                AUDITORIO - CATE e Simulação de Entrevista
                            </Link>
                            <Link to='/'>
                                AUDITÓRIO - SAS
                            </Link>
                            <Link to='/'>
                                LINKEDIN
                                <span>SALA 33</span>
                            </Link>
                        </div>
                    </section>
                    
                </section>
                <img src="/assets/images/adm/Handcoding-amico1.svg" alt="Imagem Programador" />
            </article>
        </div>
    )
}