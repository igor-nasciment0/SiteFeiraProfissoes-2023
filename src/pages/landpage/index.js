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
                    <h1>Faltam:</h1>

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

            <section className="sec-sobre">
                <div className="container-tela">
                    <div>
                        <h2>Na nossa feira de profissões,</h2>
                        <h3>Mais de mil visitantes por ano</h3>

                        <p>Há 3 anos realizamos em nosso instituto a Feira de Profissões, um evento para todas as famílias para que <span>conheçam um pouco do que temos feito por nossos alunos.</span></p>
                        <p>Neste evento nossos alunos mostrarão seus projetos usando tudo o que aprenderam aqui, querendo mostrar o melhor que se há de oferecer no FREI. </p>
                        <p>Além de poder participar e observar os projetos, pode ser uma oportunidade para conhecer melhor aquilo que gosta e deseja para seu futuro.</p>
                    </div>

                    <img src="/assets/images/imagem-feira.png" alt="Imagem da Feira de 2021" />
                </div>
            </section>

            <div className="faixa-img">
                <img src="/assets/images/FaixaRetangulo.png" alt="" />
            </div>

            <section className="sec-conheca">
                <div className="container-tela">
                    <div>
                        <h2>Venha conhecer nossa instituição e os projetos desenvolvidos por nossos alunos.</h2>
                        <p>Na Feira de Profissões, você terá oportunidade de conhecer os cursos oferecidos pelo Instituto por meio de projetos criativos feitos pelos próprios alunos para demonstrarem seu conhecimento.</p>
                    </div>
                </div>
            </section>

            <section className="faixa-inscreva">
                <div>
                    <h2>Está gostando?</h2>
                    <h3>Não perca tempo.</h3>
                    <Link>Inscreva-se Agora</Link>
                </div>
            </section>
        </div>
    )
}