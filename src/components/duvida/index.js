import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Duvida(props) {
    const [show, setShow] = useState(false);

    let propers = props.duvida; 

    return(
        <div className="duvida" onClick={() => setShow(!show)}>
            <div>
                <h4>{propers.pergunta}</h4>
                <h5>{show ? '-' : '+'}</h5>
            </div>

            <p className={show ? 'show' : 'hide'}>
                {propers.resposta}

                {propers.link && 
                    <Link to={propers.link.url}>{propers.link.texto}</Link>
                }

                {propers.lista &&
                    <ul>
                        {propers.lista.map(
                            item =>
                            <li>{item}</li>
                        )}
                    </ul>
                }
            </p>
        </div>
    )
}