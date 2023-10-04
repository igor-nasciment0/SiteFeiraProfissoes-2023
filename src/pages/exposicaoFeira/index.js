import './index.scss'
import Header from '../../components/cabecalho/index.js'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Rodape from '../../components/rodape';


export default function ExposicaoFeira(){
    const settings = {
        naturalSlideWidth: 100,
        naturalSlideHeight: 125,
        touchEnabled: true,
        dragEnabled: false,
        isPlaying: false,
        infinite: true
    };

    return(
        <div className='Pag-imgs'>
            <Header />
            <div className='sec-inicio'>
                    <div>
                        <h1>Exposição de Fotos</h1>
                        <h2>Feira das Profissões 2023</h2>
                    </div>

                    <div className='inicio-agradecimento'>
                        <h3>Nosso evento foi sensacional, e tudo isso graças à sua presença!</h3>
                        <h3>Veja algumas fotos do dia aqui, e acesse nosso site para conferir mais!</h3>
                    </div>
            </div>
            <div className='sec-fotos'>

                <div className='expo-images'> 
                <CarouselProvider className='carrosel'
                {...settings}
                totalSlides={4}
                >
                    <ButtonBack className='Button-chevron' disabled={false}>
                                        <img src="/assets/images/icons/chevron-left.svg" alt="" />
                    </ButtonBack>

                    <Slider className='slide'>
                        <Slide index={0}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel1.jpeg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel3.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel2.jpeg.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel4.jpg'></img></div>
                        </Slide>
                    </Slider>
                    
                    <ButtonNext className='Button-chevron' disabled={false}>
                        <img src="/assets/images/icons/chevron-right.svg" alt="" />
                    </ButtonNext>
                </CarouselProvider>

                <CarouselProvider className='carrosel'
                {...settings}
                totalSlides={4}
                >
                    <ButtonBack className='Button-chevron' disabled={false}>
                                        <img src="/assets/images/icons/chevron-left.svg" alt="" />
                    </ButtonBack>

                    <Slider className='slide'>
                        <Slide index={0}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel7.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel6.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel5.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel8.jpg'></img></div>
                        </Slide>
                    </Slider>
                    
                    <ButtonNext className='Button-chevron' disabled={false}>
                        <img src="/assets/images/icons/chevron-right.svg" alt="" />
                    </ButtonNext>
                </CarouselProvider>
                
                </div>
            </div>  

            <Rodape/>  
        </div>
    )
}