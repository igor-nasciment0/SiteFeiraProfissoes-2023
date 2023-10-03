import './index.scss'
import Header from '../../components/cabecalho/index.js'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default function ExposicaoFeira(){

    return(
        <div className='Pag-imgs'>
            <Header />
            <div className='sec-inicio'>
                    <div>
                        <h1>Exposição de Fotos</h1>
                        <h2>Feira das Profissões 2023</h2>
                    </div>
            </div>

            <div className='expo-informatica'>

            </div>
        </div>
    )
}