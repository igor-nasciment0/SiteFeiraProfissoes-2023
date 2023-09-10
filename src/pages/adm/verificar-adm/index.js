import './index.scss';
import './responsive.scss';
import { useEffect, useState } from 'react';
import { Await, Link } from 'react-router-dom';
import Cabecalho from '../../../components/adm/cabecalho';
import axios from 'axios';

export default function Verificar() {

    const [NomeEmail, setNomeEmail] = useState([]);
    const [Filtro, setFiltro] = useState('');
    const [Lista, setLista] = useState(false);

    // async function verificar() {
    //     const resp = await axios.get('http://localhost:5000/')
    //     console.log(resp)
    //     setNomeEmail(resp)
    // }

    // useEffect(() => {
    //     verificar();
    // }, [])

    async function clickVerificacao() {
        // const url = 'http://localhost:5000/adm/verificar'
        // const resp = await axios.get(url);
        // let Dados = []

        // for (let item of resp) {
        //     let respDados = await axios.get(item.url)

        //     Dados.push({
        //         nome: item.nome,
        //         email: item.email,
        //         verificação: item.verificacao
        //     })
        // }
        // resp(Filtro)
        // setNomeEmail(resp)

        if (Filtro === '') {
            alert('esta incompleto')
        }

        else {
            setLista(true);
        }

    }

    return (
        <div className='page-verificar-adm'>

            <Cabecalho/>

            <main>
                <h2>Verificar Ingresso</h2>

                <section>
                    <div className='verificar-adm'>
                        <img src="/assets/images/adm/Curious-adm.png" alt="" />
                        <div className='verificar-inp'>
                            <h2>INFORMAÇÕES</h2>
                            <hr />

                            <div className='verificar-input'>
                                <label>Nome/Email do visitante:</label>
                                <input type="text" value={Filtro} onChange={e => setFiltro(e.target.value)} />

                                <button onClick={clickVerificacao}>VERIFICAR</button>
                            </div>
                        </div>
                    </div>

                    <div className='validar-adm'>
                        <h2>Visitantes <br /> Encontrados </h2>

                        <div className={`container edit ${Lista ? 'mostrar' : ''}`}>
                            <table className={`edit ${Lista ? 'mostrar' : ''}`}>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>Validação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-tr'>

                                        <td>Kauan Pedro de Abreu</td>
                                        <td>Kauanpedropedrocauan@gmail.com</td>
                                        <button>Validado</button>

                                    </tr>

                                    <tr className='border-tr'>

                                        <td>Kauan Pedro de Abreu</td>
                                        <td>Kauanpedropedrocauan@gmail.com</td>
                                        <button>Validado</button>

                                    </tr>

                                    <tr className='border-tr'>

                                        <td>Kauan Pedro de Abreu</td>
                                        <td>Kauanpedropedrocauan@gmail.com</td>
                                        <button>Validado</button>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <img src="/assets/images/adm/Footer-adm.png" alt="" />
            </footer>
        </div>
    )
}


{/* repositorio de codigos para usar quando a api estiver feita


        {NomeEmail.map(item =>
            <tr>
            <td>{item.nome}</td>
            <td>{item.Email}</td>
            <button>{item.Verificacao ? 'Verificado' : 'Verificar'}</button>
            </tr>
        )}

            th, td{
                text-align: start;
            }

            tr{
                width: 100%;
                border: 1px solid #ffffff;
            }

*/}
