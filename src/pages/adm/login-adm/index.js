import './index.scss';
import './resp.scss';
import { useState } from 'react';
import axios from 'axios';

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
        setMessage('⚠ Login ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro ao verificar as credenciais:', error);
      setMessage('Erro ao verificar as credenciais. Tente novamente mais tarde.');
    }
  }

  return (
    <div className="pagina-login-adm">
      <header>
        <img src='/assets/images/logo.png' alt='' />
        <h1> Feira de Profissões 2023</h1>
        <h2> Instituto Social Nossa Senhora de Fátima</h2>
      </header>
      <aside>
        <section>
          <div className='faixa1'>
            <div>
              <img src='/assets/images/logo.png' alt='' />
              <div>
                <p>Faça login ao lado</p>
                <p>e divirta-se com o melhor de nossos alunos.</p>
                <hr />
              </div>
            </div>
          </div>
          <div className='faixa2'>
            <div>
              <div className='t1'>
                <h1>LOGIN ADM</h1>
                <hr />
              </div>
              <div className='info'>
                <div className='inp1'>
                  <label>Login:</label>
                  <input value={login} onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div className='inp1'>
                  <label>Senha:</label>
                  <div className='senha'>
                    <input type={showPassword ? 'text' : 'password'} value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <button onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <img src="/assets/images/img4.png" alt="Senha" /> : <img src="/assets/images/img3.png" alt="Senha" />}
                    </button>
                  </div>
                  <h4>{message}</h4>
                </div>
              </div>
            </div>
            <button onClick={entrar}>Entrar</button>
          </div>
        </section>
      </aside>
    </div>
  );
}
