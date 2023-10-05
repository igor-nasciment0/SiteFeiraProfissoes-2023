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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel7.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel4.jpg'></img></div>
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
                <CarouselProvider className='carrosel'
                {...settings}
                totalSlides={4}
                >
                    <ButtonBack className='Button-chevron' disabled={false}>
                                        <img src="/assets/images/icons/chevron-left.svg" alt="" />
                    </ButtonBack>

                    <Slider className='slide'>
                        <Slide index={0}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel9.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel10.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel13.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel12.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel14.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel15.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel16.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel17.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel18.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel19.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel20.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel21.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel22.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel26.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel24.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel25.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel30.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel28.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel29.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel27.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel31.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel32.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel33.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel34.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel35.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel36.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel37.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel38.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel39.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel44.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel43.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel42.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel45.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel46.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel47.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel48.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel49.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel50.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel51.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel52.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel53.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel54.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel55.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel56.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel57.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel58.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel59.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel60.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel70.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel62.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel63.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel64.jpg'></img></div>
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
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel69.jpg'></img></div>
                        </Slide>

                        <Slide index={1}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel66.jpg'></img></div>
                        </Slide>

                        <Slide index={2}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel67.jpg'></img></div>
                        </Slide>

                        <Slide index={4}>
                            <div className='carrosel-item'><img src='/assets/images/FOTOS FEIRA 2023/carrosel68.jpg'></img></div>
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