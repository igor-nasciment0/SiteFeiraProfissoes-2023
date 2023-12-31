import './index.scss';
import { useContext, useState } from 'react';
import axios from 'axios';
import Cabecalho from '../../../components/cabecalho';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../../context';

export default function LoginAdm() {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const loginContext = useContext(LoginContext)

  async function entrar() {
    try {
      const credencial = {
        login: login,
        senha: senha
      }     

      const response = await axios.post('https://vps41771.publiccloud.com.br/login-admin', credencial);

      if (response.status === 204) {
        loginContext.logar();
        navigate('/adm');
      }

    } catch (error) {
      if(error.response) {
        setMessage(error.response.data.erro)
      } else {
        setMessage(error.message.erro)
      }
    }
  }

  return (
    <div className="pagina-login-admn">
      <Cabecalho />
      <div className="faixa-inscricao">
        <img src="/assets/images/faixa.png" alt="" />
      </div>

      <main>
        <nav className='meio'>
          <div>

            <h1>LOGIN ADM</h1>
            
          </div>

          <article>
          <aside>
              <div>
                <h1>LOGIN</h1>
                <input value={login} onChange={e => setLogin(e.target.value)} />
              </div>

              <div>
                <h1>SENHA</h1>
                <div className='senha'>
                <input  type={showPassword ? 'text' : 'password'} value=    {senha} onChange={(e) => setSenha(e.target.value)}/>
                <button onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <img src="/assets/images/img4.png" alt="Senha" /> : <img src="/assets/images/img3.png" alt="Senha" />}
                    </button>
                </div>
              </div>
            </aside>
          </article>



          <button onClick={entrar}>Entrar</button>
          <div>
            <p>{message} </p>
          </div>
        </nav>
      </main>

    </div >
  );
}
