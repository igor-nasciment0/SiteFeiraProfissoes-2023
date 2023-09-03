import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import './index.scss';

import Countdown from 'react-countdown';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, CarouselContext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './index.scss';
import { useContext, useState } from 'react';

export default function Landpage() {

    const diaDaFeira = new Date('September 30, 2023 09:00:00')

    const dias = ({days}) => <h3>{days}</h3>
    const horas = ({hours}) => <h3>{hours}</h3>
    const minutos = ({minutes}) => <h3>{minutes}</h3>
    const segundos = ({seconds}) => <h3>{seconds}</h3>

    const settings = {
        naturalSlideWidth: 100,
        naturalSlideHeight: 125,
        touchEnabled: false,
        dragEnabled: false,
        isIntrinsicHeight: true,
        isPlaying: true,
        interval: 7000,
        infinite: true
    };

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

            <section className="sec-andares">
                <div className="container-tela">
                    <h2>As melhores experiências te aguardam <br/> no Instituto</h2>
                    
                    <div className="container-andares">
                        <div className="grupo-andares">
                            <div> {/* CARROSSEL TÉRREO */}
                                <h3>Térreo</h3>
                                <CarouselProvider
                                    {...settings}
                                    totalSlides={5}
                                >
                                    <ButtonBack disabled={false}>
                                        <img src="/assets/images/icons/chevron-left.svg" alt="" />
                                    </ButtonBack>

                                    <Slider>
                                        <Slide index={0}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <span className="titulo-unico">Pátio</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Estandes de Empresas Convidadas</h5>
                                                    <p>Descubra um novo corte de cabelo, visite o nutricionista e muito mais com algumas de nossas empresas colaboradoras.</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={1}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <span className="titulo-unico">Pátio</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Outros Estandes</h5>
                                                    <p>Conheça os cursos do CEDESP AVE MARIA, nosso sistema de troca de livros, os livros do Frei Xavier e mais.</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={2}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>04</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Ótica Brauzo</h5>
                                                    <p>(descobrir o que a otica Brauzo vai fazer)</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={3}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>05</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Apresentação dos Cursos</h5>
                                                    <p>Mergulhe no universo dos cursos do Instituto. Daremos uma visão abrangente de todas as oportunidades de aprendizado que oferecemos.</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={3}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>06</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Bate-papo sobre a escolha das profissões</h5>
                                                    <p>Explore diferentes trajetórias profissionais e receba orientação valiosa para tomar decisões informadas sobre seu futuro profissional.</p>
                                                </div>
                                            </div>   
                                        </Slide>
                                   </Slider>

                                    {}
                                    <ButtonNext disabled={false}>
                                        <img src="/assets/images/icons/chevron-right.svg" alt="" />
                                    </ButtonNext>
                                </CarouselProvider>
                            </div>

                            <div> {/* CARROSSEL 1° ANDAR */}
                                <h3>1° Andar</h3>
                                <CarouselProvider
                                    {...settings}
                                    totalSlides={4}
                                >
                                    <ButtonBack disabled={false}>
                                        <img src="/assets/images/icons/chevron-left.svg" alt="" />
                                    </ButtonBack>

                                    <Slider>
                                        <Slide index={0}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>17</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Posto de Saúde</h5>
                                                    <p>Faça um check-up da sua saúde com profissionais  qualificados.</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={1}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>18</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Administração: RH e POC</h5>
                                                    <p>Descubra o que são e como funcionam os Recursos Humanos e a Prova de Conceito no contexto da administração de empresas.</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={2}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>19</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Administração: Empreendedorismo e Logística</h5>
                                                    <p>Conheça o processo empreendedor, desde a ideia inicial de uma empresa até o sistema logístico, e tenha dicas de como ganhar eficiência.</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={3}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>20</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Teste de Conhecimento de Inglês</h5>
                                                    <p>Sabe um pouco de Inglês? Não deixe de testar esse conhecimento e saber como ainda pode melhorar!</p>
                                                </div>
                                            </div>   
                                        </Slide>
                                   </Slider>

                                    <ButtonNext disabled={false}>
                                        <img src="/assets/images/icons/chevron-right.svg" alt="" />
                                    </ButtonNext>
                                </CarouselProvider>
                            </div>
                        </div>

                        <div className="grupo-andares">
                            <div>
                                <h3>2° Andar</h3>
                                <CarouselProvider
                                    {...settings}
                                    totalSlides={4}
                                >
                                    <ButtonBack disabled={false}>
                                        <img src="/assets/images/icons/chevron-left.svg" alt="" />
                                    </ButtonBack>

                                    <Slider>
                                        <Slide index={0}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>24</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Comunicação Visual</h5>
                                                    <p>Aprenda sobre o trabalho de um Designer, as ferramentas, processos e conceitos-chave da criação gráfica.</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={1}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>25</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Informática: Montagem, Configuração e Redes</h5>
                                                    <p>Conheça brevemente como são montados e funcionam os computadores e redes de computadores.</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={2}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>26</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Informática: Programação</h5>
                                                    <p>Explore projetos criativos programados em computadores por nossos alunos da Informática.</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={3}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>27</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>Elaboração de Currículo</h5>
                                                    <p>Aprenda as possibilidades, convenções e diferenciais na hora de criar o seu currículo. </p>
                                                </div>
                                            </div>   
                                        </Slide>
                                   </Slider>

                                    <ButtonNext disabled={false}>
                                        <img src="/assets/images/icons/chevron-right.svg" alt="" />
                                    </ButtonNext>
                                </CarouselProvider>
                            </div>

                            <div>
                                <h3>3° Andar</h3>

                                <CarouselProvider
                                    {...settings}
                                    totalSlides={3}
                                >
                                    <ButtonBack disabled={false}>
                                        <img src="/assets/images/icons/chevron-left.svg" alt="" />
                                    </ButtonBack>

                                    <Slider>
                                        <Slide index={0}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <span className="titulo-unico">Auditório</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>CATE e Simulação de Entrevista de Emprego</h5>
                                                    <p>Conheça o CATE, da Prefeitura de São Paulo, e tenha a oportunidade de participar de uma simulação de entrevista de emprego!</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={1}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <span className="titulo-unico">Auditório</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>SAS (Cad único)</h5>
                                                    <p style={{color: 'red'}}>(as pessoas vão se cadastrar no CadÚnico?)</p>
                                                </div>
                                            </div>   
                                        </Slide>

                                        <Slide index={2}>
                                            <div className="carrossel-item">
                                                <div className="local">
                                                    <h4>Sala</h4>
                                                    <span>33</span>
                                                </div>
                                                
                                                <div>
                                                    <h5>LinkedIn</h5>
                                                    <p>Aprenda sobre o LinkedIn, e como criar uma conta que chame a atenção e te ajude a conseguir um emprego na área que deseja. </p>
                                                </div>
                                            </div>   
                                        </Slide>
                                   </Slider>

                                    <ButtonNext disabled={false}>
                                        <img src="/assets/images/icons/chevron-right.svg" alt="" />
                                    </ButtonNext>
                                </CarouselProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec-duvidas">
                <div className="container-tela">
                    <h2>Dúvidas e Informações</h2>
                    <div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}