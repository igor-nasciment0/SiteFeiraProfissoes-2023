import './index.scss';
import './responsive.scss';
import {useState } from 'react';
import Cabecalho from '../../../components/adm/cabecalho';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Verificar() {

    const[nomeEmail, setNomeEmail] = useState('');

    const[mostrarResultado,setMostrarResultado]=useState(false);
    const[resultado,setResultado]=useState([]);

    
    async function verificar() {
        const resp = await axios.get('http://localhost:5000/buscar-user?nomeEmail='+nomeEmail);
        setResultado(resp.data);
 
        setMostrarResultado(true);
    }

    async function validar(id){

        const idAlterar=id;
        const resp = await axios.put('http://localhost:5000/verificacao-user/'+idAlterar);

        verificar();
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
                                <input type="text" value={nomeEmail} onChange={e => setNomeEmail(e.target.value)} />

                                <button onClick={verificar}>VERIFICAR</button>
                            </div>
                        </div>
                    </div>

                    {mostrarResultado? 
                    <div className='resultado-verificacao'> 

                        {resultado.length!==0 ? 
                        <div className='usuarios-encontrados'>

                            <h2>Visitantes Encontrados</h2>

                            <table>

                                <thead>

                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {resultado.map(item=> 
                                    <tr> 
                                        <td>{item.nm_nome}</td>
                                        <td>{item.ds_email}</td>
                                        {item.bt_verificacao===null ||  item.bt_verificacao==false? 
                                        <td>
                                            <button className='botao-validar' onClick={() => {validar(item.id_inscricao);}}>Validar 
                                                <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.28417 4.25C4.28417 3.12283 4.78831 2.04183 5.6857 1.2448C6.58309 0.447767 7.80021 0 9.0693 0C10.3384 0 11.5555 0.447767 12.4529 1.2448C13.3503 2.04183 13.8544 3.12283 13.8544 4.25C13.8544 5.37717 13.3503 6.45817 12.4529 7.2552C11.5555 8.05223 10.3384 8.5 9.0693 8.5C7.80021 8.5 6.58309 8.05223 5.6857 7.2552C4.78831 6.45817 4.28417 5.37717 4.28417 4.25ZM0.695312 16.0139C0.695312 12.7434 3.67855 10.0938 7.36086 10.0938H10.7777C14.4601 10.0938 17.4433 12.7434 17.4433 16.0139C17.4433 16.5584 16.9461 17 16.333 17H1.80561C1.19252 17 0.695312 16.5584 0.695312 16.0139ZM24.0602 5.87695L19.2751 10.127C18.9237 10.4391 18.3555 10.4391 18.0078 10.127L15.6152 8.00195C15.2638 7.68984 15.2638 7.18516 15.6152 6.87637C15.9666 6.56758 16.5349 6.56426 16.8825 6.87637L18.6396 8.43691L22.7892 4.74805C23.1406 4.43594 23.7088 4.43594 24.0565 4.74805C24.4042 5.06016 24.4079 5.56484 24.0565 5.87363L24.0602 5.87695Z" fill="white"/>
                                                </svg>
                                            </button>
                                        </td> 
                                        : 
                                        <td className='celula-validado'>
                                            <button className='botao-validado'>Validado
                                                <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.28417 4.25C4.28417 3.12283 4.78831 2.04183 5.6857 1.2448C6.58309 0.447767 7.80021 0 9.0693 0C10.3384 0 11.5555 0.447767 12.4529 1.2448C13.3503 2.04183 13.8544 3.12283 13.8544 4.25C13.8544 5.37717 13.3503 6.45817 12.4529 7.2552C11.5555 8.05223 10.3384 8.5 9.0693 8.5C7.80021 8.5 6.58309 8.05223 5.6857 7.2552C4.78831 6.45817 4.28417 5.37717 4.28417 4.25ZM0.695312 16.0139C0.695312 12.7434 3.67855 10.0938 7.36086 10.0938H10.7777C14.4601 10.0938 17.4433 12.7434 17.4433 16.0139C17.4433 16.5584 16.9461 17 16.333 17H1.80561C1.19252 17 0.695312 16.5584 0.695312 16.0139ZM24.0602 5.87695L19.2751 10.127C18.9237 10.4391 18.3555 10.4391 18.0078 10.127L15.6152 8.00195C15.2638 7.68984 15.2638 7.18516 15.6152 6.87637C15.9666 6.56758 16.5349 6.56426 16.8825 6.87637L18.6396 8.43691L22.7892 4.74805C23.1406 4.43594 23.7088 4.43594 24.0565 4.74805C24.4042 5.06016 24.4079 5.56484 24.0565 5.87363L24.0602 5.87695Z" fill="white"/>
                                                </svg>
                                            </button>

                                            <button className='botao-validar desvalidar'>Desvalidar


                                            </button>
                                        </td>}
                                        
                                    </tr>)}
                                </tbody>
                            </table>
                        </div> 

                        : <div className='usuarios-nao-encontrados'>

                        <h2>Nome/Email não encontrado</h2>

                        <svg width="162" height="144" viewBox="0 0 162 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.4946 13.5C31.4946 9.91958 32.917 6.4858 35.4488 3.95406C37.9807 1.42232 41.4146 0 44.9952 0C48.5757 0 52.0097 1.42232 54.5415 3.95406C57.0733 6.4858 58.4957 9.91958 58.4957 13.5C58.4957 17.0804 57.0733 20.5142 54.5415 23.0459C52.0097 25.5777 48.5757 27 44.9952 27C41.4146 27 37.9807 25.5777 35.4488 23.0459C32.917 20.5142 31.4946 17.0804 31.4946 13.5ZM42.7451 99V135C42.7451 139.978 38.723 144 33.7447 144C28.7664 144 24.7443 139.978 24.7443 135V72.2531L16.7002 85.6406C14.1408 89.8875 8.59991 91.2656 4.35285 88.7062C0.105804 86.1469 -1.27238 80.6062 1.2871 76.3594L17.6847 49.0781C22.5786 40.95 31.354 35.9719 40.8325 35.9719H49.186C58.6645 35.9719 67.4398 40.95 72.3338 49.0781L84.9624 70.0875C80.4341 75.0375 76.9184 80.9156 74.6683 87.3844C74.1339 86.8781 73.6838 86.2875 73.2901 85.6125L65.246 72.2531V135C65.246 139.978 61.224 144 56.2456 144C51.2673 144 47.2453 139.978 47.2453 135V99H42.7451ZM121.498 63C132.24 63 142.542 67.267 150.137 74.8622C157.733 82.4574 162 92.7587 162 103.5C162 114.241 157.733 124.543 150.137 132.138C142.542 139.733 132.24 144 121.498 144C110.757 144 100.455 139.733 92.8593 132.138C85.2638 124.543 80.9966 114.241 80.9966 103.5C80.9966 92.7587 85.2638 82.4574 92.8593 74.8622C100.455 67.267 110.757 63 121.498 63ZM121.498 130.5C123.289 130.5 125.006 129.789 126.271 128.523C127.537 127.257 128.249 125.54 128.249 123.75C128.249 121.96 127.537 120.243 126.271 118.977C125.006 117.711 123.289 117 121.498 117C119.708 117 117.991 117.711 116.725 118.977C115.459 120.243 114.748 121.96 114.748 123.75C114.748 125.54 115.459 127.257 116.725 128.523C117.991 129.789 119.708 130.5 121.498 130.5ZM103.498 90.45V92.25C103.498 94.725 105.523 96.75 107.998 96.75C110.473 96.75 112.498 94.725 112.498 92.25V90.45C112.498 88.9594 113.707 87.75 115.198 87.75H126.589C128.755 87.75 130.499 89.4938 130.499 91.6594C130.499 93.1219 129.683 94.4438 128.417 95.1188L119.417 99.8438C117.926 100.631 116.998 102.15 116.998 103.838V108C116.998 110.475 119.023 112.5 121.498 112.5C123.973 112.5 125.999 110.475 125.999 108V106.566L132.608 103.106C136.855 100.884 139.499 96.4688 139.499 91.6875C139.499 84.5437 133.705 78.7781 126.589 78.7781H115.198C108.729 78.7781 103.498 84.0094 103.498 90.4781V90.45Z" fill="white"/>
                        </svg>

                    </div>}
                    </div> : <div></div>}

                </section>
            </main>

        </div>
    )
}