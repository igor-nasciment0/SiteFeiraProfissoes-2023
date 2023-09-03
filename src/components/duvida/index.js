import './index.scss';
import { useState } from 'react';

export default function Duvida(props) {
    const [show, setShow] = useState(false);

    return(
        <div className="duvida">
            <div onClick={() => setShow(!show)}>
                <h4>{props.pergunta}</h4>
                <h5>{show ? '-' : '+'}</h5>
            </div>

            <p className={show ? 'show' : 'hide'}>
                {props.resposta}
            </p>
        </div>
    )
}