import { Link } from 'react-router-dom';
import './index.scss';

export default function Rodape() {
    return(
        <footer className='rodape'>
            <img className='superior' src='../assets/images/retangulorodape.png' alt='' />

            <div className='container-tela'>                
                <div className='cont'>
                    <div className='logorodape'>
                        <img alt='' src='../assets/images/logorodape.png' />
                    </div>

                    <div className='contat'>
                        <h1>Contato</h1>
                        <li> <img alt='' src='../assets/images/icons/tel.png'/> Tel: (11) 5687-8876 / (11) 3798-5037</li>
                        <li> <img alt='' src='../assets/images/icons/email.png'/> adm@acaonsfatima.org.br</li>
                        <li> <img alt='' src='../assets/images/icons/local.png'/> Av. Cel. Octaviano de Freitas Costa, 463 – Jd. Veleiros, São Paulo, SP</li>
                    </div>

                    <div className='siga'>
                        <Link to={"https://www.instagram.com/institutonsfatima/"}><img src="/assets/images/icons/instagram.svg" alt="" /></Link>
                        <Link to={"https://www.facebook.com/institutonsfatima"}><img src="/assets/images/icons/facebook.svg"  alt="" /></Link>
                        <Link to={"https://www.tiktok.com/discover/instituto-social-nossa-senhora-de-fátima"}><img src="/assets/images/icons/brand-tiktok.svg"  alt="" /></Link>
                    </div>
                </div>
            </div>    

            <div className='final'>
                <hr />
                <p>2023 ©</p>
            </div>                        
        </footer>
    )
}