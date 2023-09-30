import './index.scss';
import Cabecalho from '../../../components/adm/cabecalho';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { LoginContext } from '../../../context';

export default function ListagemAdm() {

    const navigate = useNavigate();
    const login = useContext(LoginContext)

    useEffect(() => {
        if(!login.logado)
        {
            navigate('/adm/login');
        }
    })

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
                            <Link to='/adm/contador/4'>
                                Higiene Bucal
                                <span>SALA 17</span>
                            </Link>
                            <Link to='/adm/contador/5'>
                                ADM - RH e POC
                                <span>SALA 18</span>
                            </Link>
                            <Link to='/adm/contador/6'>
                                ADM - Empreendedorismo e Logística
                                <span>SALA 19</span>
                            </Link>
                            <Link to='/adm/contador/15'>
                                Inglês - Teste de Conhecimento em Bate Papo em Inglês
                                <span>SALA 20</span>
                            </Link>
                        </div>
                    </section>

                    <section className='blocos'>
                        <div>
                            <h1>2° Andar</h1>
                            <Link to='/adm/contador/7'>
                                Comunicação Visual
                                <span>SALA 24</span>
                            </Link>
                            <Link to='/adm/contador/8'>
                                Informática - Montagem, Configuração e Redes
                                <span>SALA 25</span>
                            </Link>
                            <Link to='/adm/contador/9'>
                                Informatica - Programação
                                <span>SALA 26</span>
                            </Link>
                            <Link to='/adm/contador/14'>
                                Elaboração de Currículos
                                <span>SALA 27</span>
                            </Link>
                        </div>
                        <div>
                            <h1>3° Andar</h1>
                            <Link to='/adm/contador/10'>
                                AUDITORIO - CATE
                            </Link>
                            <Link to='/adm/contador/11'>
                                AUDITÓRIO - CadÚnico
                            </Link>
                            <Link to='/adm/contador/12'>
                                Cohab
                            </Link>
                            <Link to='/adm/contador/13'>
                                Simulação de Entrevista
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