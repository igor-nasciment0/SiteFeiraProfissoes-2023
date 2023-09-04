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
                        <li> <img alt='' src='../assets/images/icons/tel.png'/> Tel: (11) 5687-8876/(11) 3798-5036</li>
                        <li> <img alt='' src='../assets/images/icons/email.png'/> acaosoc@globo.com</li>
                        <li> <img alt='' src='../assets/images/icons/local.png'/> Av. Cel. Octaviano De Freitas Costa, 463 – Jd. Veleiros, São Paulo, SP</li>
                    </div>

                    <div className='siga'>
                        <img alt='' src='../assets/images/icons/Siga-nos.png'/>
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