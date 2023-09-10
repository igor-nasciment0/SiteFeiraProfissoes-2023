import './index.scss';
import AdmHeader from '../../../components/adm/cabecalho';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomeAdm(){

    const[usuariosCadastrados,setUsuariosCadastrados]=useState('');
    const[visitantes,setVisitantes]=useState('');
    const[porcentagem,setPorcentagem]=useState(0);
    const[filtro,setFiltro]=useState('maior');
    const[salas,setSalas]=useState([]);

    async function chamarUsuariosInscritos(){

        const url='http://localhost:5000/inscricao/quantidade';

        const resp=await axios.get(url);

        setUsuariosCadastrados(resp.data);
    }

    async function chamarVisitantes(){

        const url='http://localhost:5000/inscricao/visitantes';

        const resp=await axios.get(url);

        setVisitantes(resp.data);
    }

    function calcularPorcentagem(){

        const inscritos=Number(usuariosCadastrados);
        const qtdVisitantes=Number(visitantes);

        for(let cont=0;cont<=100;cont++){

            let calculo=(inscritos*cont)/100;

            if(calculo===qtdVisitantes){

                setPorcentagem(cont);
            }
        }
    }

    async function listarSalas(){

        const url='http://localhost:5000/salas/'+filtro;

        const resp=await axios.get(url);

        console.log(resp);
        setSalas(resp.data);
    }

    async function listarSalasMenor(){}

    useEffect(() => {

        chamarUsuariosInscritos();
        chamarVisitantes();
    },[]);

    useEffect(() => {

        if(usuariosCadastrados!=='' || visitantes!==''){

            calcularPorcentagem();
        }
    },[usuariosCadastrados,visitantes]);

    useEffect(() => {

        listarSalas();

    },[filtro]);

    return(
        
        <div className='page-homeAdm'>

            <AdmHeader/>

            <main className='conteudo'>

                <div className='informacoes'>

                    <h3>Informações Gerais</h3>

                    <div className='infs-gerais'>

                        <div className='usuarios-cadastrados'>

                            <h5>USUÁRIOS CADASTRADOS</h5>

                            <div> <span>{usuariosCadastrados}</span> USUÁRIOS</div>
                        </div>

                        <div className='visitantes-totais'>

                            <h5>VISITANTES TOTAIS</h5>

                            <div> <span>{visitantes}</span>VISITANTES</div>
                        </div>
                    </div>

                    <div className='taxa-presenca'>
                        <h5>Taxa de presença: <span>{porcentagem}%</span> </h5>
                        <hr/>
                    </div>

                    <div className='listar-salas-lotacao'>

                        <div className='tabela'>

                            <h6>VISITANTES EM CADA SALA</h6>

                            <table>

                                <thead>
                                    <tr>
                                        <th>SALAS</th>
                                        <th>VISITANTES</th>
                                        <th>APRESENTAÇÃO</th>
                                    </tr>
                                    
                                </thead>

                                <tbody>

                                    {salas.map(item => 

                                    <tr>
                                        <td>{item.DS_SALAS}</td>
                                        <td>{item.NR_PESSOAS}</td>
                                        <td>{item.DS_APRESENTACAO}</td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className='filtro'>

                            <h6>FILTRAR POR:</h6>
                            <hr/>

                            <div className='inputs-filtro'>

                                <div>
                                    <input type='checkbox' id='maior' value='maior' checked={filtro==='maior'} onChange={(e) => {setFiltro(e.target.value)}}/>
                                    <label for='maior'>MAIOR</label>
                                </div>
                                
                                <div>
                                    
                                    <input type='checkbox' id='menor' value='menor'checked={filtro==='menor'}  onChange={(e) => {setFiltro(e.target.value)}}/>
                                    <label for='menor'>MENOR</label>
                                </div>
                            </div>

                            <div></div>
                        </div>
                    </div>
                </div>

                <div className='selecionar'>

                    <div className='titulo'>

                        <h3>O QUE DESEJA FAZER ?</h3>
                        <hr/>
                    </div>

                    <div className='contagem'>

                        <h4> 
                            <svg id='icon-contar' width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.815 0.339844C23.2761 0.679688 23.5538 1.2291 23.5538 1.8125V7.25H24.4427C25.4261 7.25 26.2205 8.05996 26.2205 9.0625C26.2205 10.065 25.4261 10.875 24.4427 10.875H21.7761H19.1094C18.1261 10.875 17.3316 10.065 17.3316 9.0625C17.3316 8.05996 18.1261 7.25 19.1094 7.25H19.9983V4.32734L19.6705 4.44063C18.7372 4.75781 17.7316 4.24238 17.4205 3.29648C17.1094 2.35059 17.615 1.31973 18.5427 1.00254L21.2094 0.0962891C21.7538 -0.090625 22.3483 0.00566398 22.8094 0.345508L22.815 0.339844ZM6.66495 0C7.16495 0 7.63718 0.215234 7.97606 0.589063L12.865 6.02656C13.5261 6.76289 13.4816 7.9127 12.7538 8.58672C12.0261 9.26074 10.9038 9.21543 10.2427 8.47344L8.44273 6.47402V23.5625C8.44273 24.565 7.64829 25.375 6.66495 25.375C5.68162 25.375 4.88718 24.565 4.88718 23.5625V6.47402L3.08717 8.47344C2.42606 9.20977 1.29829 9.26074 0.576064 8.58672C-0.146159 7.9127 -0.196159 6.76289 0.464953 6.02656L5.35384 0.589063C5.69273 0.215234 6.16495 0 6.66495 0ZM22.5372 18.8557C22.7484 18.7538 22.9378 18.6104 23.0947 18.4339C23.2516 18.2573 23.3728 18.051 23.4515 17.8267C23.5302 17.6024 23.5648 17.3645 23.5532 17.1265C23.5417 16.8886 23.4843 16.6553 23.3844 16.4399C23.2844 16.2246 23.1439 16.0315 22.9707 15.8715C22.7975 15.7116 22.5952 15.588 22.3751 15.5077C22.1551 15.4275 21.9218 15.3923 21.6884 15.404C21.455 15.4158 21.2262 15.4743 21.015 15.5762C20.8037 15.6781 20.6143 15.8214 20.4574 15.9979C20.3005 16.1745 20.1793 16.3808 20.1006 16.6051C20.0219 16.8295 19.9874 17.0674 19.9989 17.3053C20.0104 17.5433 20.0678 17.7766 20.1677 17.9919C20.2677 18.2072 20.4083 18.4004 20.5814 18.5603C20.7546 18.7203 20.957 18.8439 21.177 18.9241C21.397 19.0043 21.6304 19.0395 21.8638 19.0278C22.0971 19.0161 22.326 18.9576 22.5372 18.8557ZM20.2761 21.9652C18.3094 21.3195 16.8872 19.4391 16.8872 17.2188C16.8872 14.466 19.0761 12.2344 21.7761 12.2344C24.4761 12.2344 26.665 14.466 26.665 17.2188C26.665 18.5498 26.2483 19.8412 25.4705 20.9117L22.7594 24.6387C22.1761 25.443 21.0594 25.6129 20.2705 25.0182C19.4816 24.4234 19.315 23.285 19.8983 22.4807L20.2761 21.9596V21.9652Z" fill="white"/>
                            </svg>
                        CONTAGEM DE SALAS</h4>
                        <hr/>
                        <p>(Controle o fluxo de pessoas que estão entrando e saindo em casa sala)</p>

                        <svg className='svg-main' width="67" height="69" viewBox="0 0 67 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M66.8143 22.4563C67.2586 23.629 66.8837 24.9365 65.9257 25.7722L59.914 31.083C60.0667 32.2018 60.15 33.3475 60.15 34.5067C60.15 35.666 60.0667 36.8117 59.914 37.9305L65.9257 43.2413C66.8837 44.077 67.2586 45.3844 66.8143 46.5571C66.2034 48.1612 65.4675 49.6978 64.6206 51.1805L63.9681 52.2723C63.0518 53.755 62.0243 55.1569 60.8998 56.4778C60.0806 57.4483 58.72 57.7718 57.4982 57.3944L49.7649 55.0086C47.9045 56.397 45.8497 57.5562 43.656 58.4323L41.9206 66.1289C41.6429 67.3555 40.671 68.326 39.3937 68.5282C37.4777 68.8382 35.5062 69 33.4931 69C31.4799 69 29.5084 68.8382 27.5924 68.5282C26.3151 68.326 25.3432 67.3555 25.0656 66.1289L23.3301 58.4323C21.1364 57.5562 19.0816 56.397 17.2212 55.0086L9.50179 57.4079C8.28001 57.7853 6.91939 57.4483 6.10025 56.4913C4.97566 55.1703 3.94825 53.7685 3.03192 52.2858L2.37938 51.194C1.53246 49.7113 0.796621 48.1746 0.185732 46.5706C-0.258551 45.3979 0.116313 44.0904 1.0743 43.2547L7.086 37.9439C6.93328 36.8117 6.84997 35.666 6.84997 34.5067C6.84997 33.3475 6.93328 32.2018 7.086 31.083L1.0743 25.7722C0.116313 24.9365 -0.258551 23.629 0.185732 22.4563C0.796621 20.8523 1.53246 19.3157 2.37938 17.833L3.03192 16.7412C3.94825 15.2584 4.97566 13.8566 6.10025 12.5357C6.91939 11.5652 8.28001 11.2416 9.50179 11.6191L17.2351 14.0049C19.0955 12.6165 21.1503 11.4573 23.344 10.5812L25.0795 2.88455C25.3571 1.65794 26.329 0.687439 27.6063 0.485251C29.5223 0.16175 31.4938 0 33.5069 0C35.5201 0 37.4916 0.16175 39.4076 0.471772C40.6849 0.67396 41.6568 1.64446 41.9344 2.87107L43.6699 10.5677C45.8636 11.4438 47.9184 12.603 49.7788 13.9914L57.5121 11.6056C58.7339 11.2282 60.0945 11.5652 60.9136 12.5222C62.0382 13.8431 63.0656 15.245 63.982 16.7277L64.6345 17.8195C65.4814 19.3022 66.2173 20.8388 66.8282 22.4429L66.8143 22.4563ZM33.5069 45.2901C36.4527 45.2901 39.2779 44.154 41.3608 42.1317C43.4438 40.1095 44.614 37.3667 44.614 34.5067C44.614 31.6468 43.4438 28.904 41.3608 26.8818C39.2779 24.8595 36.4527 23.7234 33.5069 23.7234C30.5612 23.7234 27.736 24.8595 25.6531 26.8818C23.5701 28.904 22.3999 31.6468 22.3999 34.5067C22.3999 37.3667 23.5701 40.1095 25.6531 42.1317C27.736 44.154 30.5612 45.2901 33.5069 45.2901Z" fill="white"/>
                        </svg>

                        
                        <Link className='botao-direcionar' to='/adm/contador'>IR PARA PÁGINA
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 25 22" fill="none">
                                <path d="M24.4754 12.1593C25.173 11.4513 25.173 10.3015 24.4754 9.59351L15.5469 0.531006C14.8493 -0.177002 13.7165 -0.177002 13.019 0.531006C12.3214 1.23901 12.3214 2.38882 13.019 3.09683L18.9062 9.06675H1.78571C0.797991 9.06675 0 9.87671 0 10.8792C0 11.8818 0.797991 12.6917 1.78571 12.6917H18.9007L13.0246 18.6617C12.327 19.3697 12.327 20.5195 13.0246 21.2275C13.7221 21.9355 14.8549 21.9355 15.5525 21.2275L24.481 12.165L24.4754 12.1593Z" fill="white"/>
                            </svg>
                        </Link>
                    </div>

                    <div className='validacao'>

                        <h4> 
                            <svg id='icon-lupa' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_654_58)">
                                    <path d="M16.25 8.125C16.25 9.91797 15.668 11.5742 14.6875 12.918L19.6328 17.8672C20.1211 18.3555 20.1211 19.1484 19.6328 19.6367C19.1445 20.125 18.3516 20.125 17.8633 19.6367L12.918 14.6875C11.5742 15.6719 9.91797 16.25 8.125 16.25C3.63672 16.25 0 12.6133 0 8.125C0 3.63672 3.63672 0 8.125 0C12.6133 0 16.25 3.63672 16.25 8.125ZM8.125 13.75C8.86369 13.75 9.59514 13.6045 10.2776 13.3218C10.9601 13.0391 11.5801 12.6248 12.1025 12.1025C12.6248 11.5801 13.0391 10.9601 13.3218 10.2776C13.6045 9.59514 13.75 8.86369 13.75 8.125C13.75 7.38631 13.6045 6.65486 13.3218 5.97241C13.0391 5.28995 12.6248 4.66985 12.1025 4.14752C11.5801 3.62519 10.9601 3.21086 10.2776 2.92818C9.59514 2.64549 8.86369 2.5 8.125 2.5C7.38631 2.5 6.65486 2.64549 5.97241 2.92818C5.28995 3.21086 4.66985 3.62519 4.14752 4.14752C3.62519 4.66985 3.21086 5.28995 2.92818 5.97241C2.64549 6.65486 2.5 7.38631 2.5 8.125C2.5 8.86369 2.64549 9.59514 2.92818 10.2776C3.21086 10.9601 3.62519 11.5801 4.14752 12.1025C4.66985 12.6248 5.28995 13.0391 5.97241 13.3218C6.65486 13.6045 7.38631 13.75 8.125 13.75Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_654_58">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        VALIDAÇÃO DE INGRESSO</h4>
                        <hr/>
                        <p>(Verifique se o ingresso do visitante é válido)</p>

                        <svg className='svg-main' width="106" height="87" viewBox="0 0 106 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1035 21.75C16.1035 15.9815 18.3656 10.4493 22.3923 6.37043C26.419 2.29151 31.8803 0 37.5748 0C43.2694 0 48.7307 2.29151 52.7573 6.37043C56.784 10.4493 59.0461 15.9815 59.0461 21.75C59.0461 27.5185 56.784 33.0507 52.7573 37.1296C48.7307 41.2085 43.2694 43.5 37.5748 43.5C31.8803 43.5 26.419 41.2085 22.3923 37.1296C18.3656 33.0507 16.1035 27.5185 16.1035 21.75ZM0 81.9533C0 65.216 13.386 51.6562 29.9089 51.6562H45.2407C61.7636 51.6562 75.1496 65.216 75.1496 81.9533C75.1496 84.74 72.9186 87 70.1676 87H4.98202C2.231 87 0 84.74 0 81.9533ZM104.84 30.0762L83.3691 51.8262C81.7923 53.4234 79.2426 53.4234 77.6826 51.8262L66.9469 40.9512C65.3701 39.3539 65.3701 36.7711 66.9469 35.1908C68.5237 33.6105 71.0734 33.5936 72.6335 35.1908L80.5175 43.1772L99.1371 24.2988C100.714 22.7016 103.264 22.7016 104.824 24.2988C106.384 25.8961 106.4 28.4789 104.824 30.0592L104.84 30.0762Z" fill="white"/>
                        </svg>

                        
                        <Link className='botao-direcionar' to='/adm/validar'>IR PARA PÁGINA
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 25 22" fill="none">
                                <path d="M24.4754 12.1593C25.173 11.4513 25.173 10.3015 24.4754 9.59351L15.5469 0.531006C14.8493 -0.177002 13.7165 -0.177002 13.019 0.531006C12.3214 1.23901 12.3214 2.38882 13.019 3.09683L18.9062 9.06675H1.78571C0.797991 9.06675 0 9.87671 0 10.8792C0 11.8818 0.797991 12.6917 1.78571 12.6917H18.9007L13.0246 18.6617C12.327 19.3697 12.327 20.5195 13.0246 21.2275C13.7221 21.9355 14.8549 21.9355 15.5525 21.2275L24.481 12.165L24.4754 12.1593Z" fill="white"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}