import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import Cabecalho from '../../../components/cabecalho';

export default function LoginAdm() {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  async function entrar() {
    try {
      const response = await axios.get('http://localhost:5000/login-admin');
      const credencial = response.data;

      if (login === credencial.login && senha === credencial.senha) {
        window.location.href = 'http://localhost:3000/adm';
      } else {
        setMessage('⚠ Login ou senha incorretos ');
      }
    } catch (error) {
      console.error('⚠ Erro ao verificar as credenciais:', error);
      setMessage('⚠ Erro ao verificar as credenciais. Tente novamente mais tarde.');
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



          <button onClick={entrar}>Salvar</button>
          <div>
            <p>{message} </p>
          </div>
        </nav>
      </main>

    </div >
  );
}
