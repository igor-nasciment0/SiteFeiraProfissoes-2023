import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import 'react-confirm-alert/src/react-confirm-alert.css';
import InputMask from 'react-input-mask';
import Cabecalho from '../../components/cabecalho';
import { useNavigate } from 'react-router-dom';


export default function Inscricao() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [bairro, setBairro] = useState('')
  const [sabendo, setSabendo] = useState('')
  const [foialuno, setFoialuno] = useState('')

  const [campoobrigatorio, setCampoobrigatorio] = useState('')

  const navigate = useNavigate();

  async function inscrever() {
    try {

      let inscricao = {
        nome: nome,
        email: email,
        telefone: telefone,
        bairro: bairro,
        sabendo: sabendo,
        foialuno: foialuno,
      };

      let url = 'https://vps41771.publiccloud.com.br/inserir';
      let resposta = await axios.post(url, inscricao);
      
      if (resposta.status === 200) {
        navigate('/reservado');
      }

    } catch (err) {
      setCampoobrigatorio(err.response.data.erro);
    }
  }

  return (
    <div className="pagina-ingresso">
      <Cabecalho />
      <div className="faixa-inscricao" >
        <img src="/assets/images/faixa.png" alt="" />
      </div>

      <main>
        <nav className='meio'>
          <div>

            <h1>Inscrição</h1>
          </div>

          <article>
            <aside>
              <div>
                <h1>Nome</h1>
                <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Ex: João Lucas da Silva" maxlength="99"></input>
              </div>

              <div>
                <h1>E-mail</h1>
                <InputMask type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ex: nome123@gmail.com" maxlength="99" maskPlaceholder={setEmail} required />
              </div>

              <div>
                <h1>Número de telefone</h1>
                <InputMask mask="(99) 99999-9999" maskChar=" " value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Ex: (11) 99999-5555" required />
              </div>
            </aside>

            <aside>
              <div>
                <h1>Bairro</h1>
                <input value={bairro} onChange={e => setBairro(e.target.value)} placeholder="Ex: Cocaia" maxlength="99"></input>
              </div>


              <div>
                <h1>Como ficou sabendo da feira?</h1>
                <input value={sabendo} onChange={e => setSabendo(e.target.value)} placeholder="Ex: Amigos" maxlength="99"></input>
              </div>

              <div>
                <h1>Já foi aluno do FREI?</h1>
                <input value={foialuno} onChange={e => setFoialuno(e.target.value)} placeholder="Ex: Sim" maxlength="99"></input>

              </div>
            </aside>
          </article>



          <button onClick={inscrever}>Salvar</button>
          <div>
            <p>{campoobrigatorio} </p>
          </div>
        </nav>
      </main>
    </div>
  );
}