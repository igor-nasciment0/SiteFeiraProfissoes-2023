import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import './index.scss';

import Countdown from 'react-countdown';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './index.scss';
import Duvida from '../../components/duvida';
import Rodape from '../../components/rodape';

export default function Landpage() {

    const diaDaFeira = new Date('September 30, 2023 09:00:00')

    const dias = ({days}) => <h3>{days}</h3>
    const horas = ({hours}) => <h3>{hours}</h3>
    const minutos = ({minutes}) => <h3>{minutes}</h3>
    const segundos = ({seconds}) => <h3>{seconds}</h3>

    const settings = {
        naturalSlideWidth: 100,
        naturalSlideHeight: 125,
        touchEnabled: true,
        dragEnabled: false,
        isIntrinsicHeight: true,
        isPlaying: true,
        interval: 7000,
        infinite: true
    };

    const duvidas1 =
        [
            {pergunta: 'Quem pode ir à feira?', resposta: 'Todos podem participar! Para tanto, inscreva-se.' },
            {pergunta: 'O evento é gratuito?', resposta: 'Sim! A entrada na Feira das Profissões do Instituto é gratuita e sempre será.'},
            {pergunta: 'Quem fez os projetos?', resposta:'Todos os projetos apresentados na feira são feitos pelos alunos, enquanto alguns serviços (como a simulação de entrevista) serão oferecidos por empresas e organizações convidadas.'},
        ]

    const duvidas2 =
    [
        {pergunta: 'Sobre a alimentação', resposta:'No prédio do Instituto, você também encontrará a nossa lanchonete. Bom apetite!'},
        {pergunta: 'Empresas convidadas', resposta:'Estas são algumas das empresas convidadas para nosso evento:', lista: ['Fios de Berenice (Doação de Cabelo)', 'Universidade Ítalo-Brasileiro', 'UNISA', 'STB Intercâmbio', 'Instituto ITMídia', 'Daniela Matos (Nutricionista)', 'São Paulo Open Centre']},
        {pergunta: 'Como fazer a inscrição?', resposta:'Preencha o formulário ', link: {texto: 'neste link', url:'/'}},
    ]

    return(
        <div className="pagina-landpage">
            <Cabecalho />

            <section className="sec-inicio">
                <div className="container-tela">
                    <div>
                        <h1>Esperamos você na</h1>
                        <h2>Feira das Profissões 2023</h2>
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
                        <h2>Na nossa Feira das Profissões,</h2>
                        <h3>Mais de dois mil visitantes por ano</h3>
                        <h4>E mais de 4.600 atendimentos</h4>

                        <p>Há 3 anos realizamos em nosso instituto a Feira das Profissões, um evento para todas as famílias para que <span>conheçam um pouco do que temos feito por nossos alunos.</span></p>
                        <p>Neste evento nossos alunos mostrarão seus projetos usando um pouco do que aprenderam aqui, demonstrando o melhor que o Instituto pode oferecer. </p>
                        <p>Além de poder participar e observar os projetos, pode ser uma oportunidade para os <span>que buscam uma vaga de emprego.</span></p>
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
                        <p>Na Feira das Profissões, você terá oportunidade de conhecer os cursos oferecidos pelo Instituto por meio de projetos criativos feitos pelos próprios alunos para demonstrarem seu conhecimento.</p>
                    </div>

                    <img src="/assets/images/ImagemAulaFrei.png" alt="" />
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
                            <div>
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
                                                    <p>Doe seu cabelo para quem precisa, visite o nutricionista e muito mais com algumas de nossas empresas colaboradoras.</p>
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
                                                    <p style={{color: 'red'}}>(descobrir o que a otica Brauzo vai fazer)</p>
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
                                                    <h5>Bate-papo: escolha de profissão</h5>
                                                    <p>Explore diferentes trajetórias profissionais conosco para tomar decisões acertadas sobre seu futuro profissional.</p>
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

                            <div> 
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
                                                    <p>Faça um check-up da sua saúde com profissionais qualificados.</p>
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
                                                    <h5>ADM: RH e POC</h5>
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
                                                    <h5>ADM: Empreendedorismo e Logística</h5>
                                                    <p>Conheça o processo empreendedor, desde a ideia inicial de uma empresa até o sistema logístico</p>
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
                                                    <h5>Simulação de Entrevista</h5>
                                                    <p>Simule uma entrevista de emprego com a Seguradora Maphre!</p>
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
                                                    <p>Aprenda sobre o LinkedIn, e a como criar uma conta que te ajude a trabalhar na área que deseja. </p>
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
                        <div className="informacoes-gerais">
                            <div>
                                <h3>Data de Realização</h3>
                                <p className="maiusculo">30 de setembro de 2023</p>
                            </div>

                            <div>
                                <h3>Horário</h3>
                                <p>09h às 15h</p>
                            </div>

                            <div>
                                <h3>Local</h3>
                                <p>Instituto Social Nossa Senhora de Fátima </p>
                                <span>Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo - SP</span>
                                <Link to={"https://www.google.com/maps/place/Instituto+Social+Nossa+Senhora+de+Fátima/@-23.6803284,-46.7105058,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce502d2289a843:0x14406b17b30d0174!8m2!3d-23.6803333!4d-46.7079309!16s%2Fg%2F1ptxj22k2?entry=ttu"}>Como Chegar <img src="/assets/images/icons/aviao.svg" alt="" /></Link>
                            </div>
                        </div>

                        <div className="duvidas">
                            <div>
                                {duvidas1.map(
                                    duvida => 
                                    <Duvida duvida={duvida}/>
                                )}
                            </div>
                            
                            <div>
                                {duvidas2.map(
                                    duvida =>
                                    <Duvida duvida={duvida}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

            <Rodape/>
        </div>
    )
}