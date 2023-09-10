import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import InputMask from 'react-input-mask';
import Cabecalho from '../../components/cabecalho';


export default function Inscricao() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [bairro, setBairro] = useState('')
  const [sabendo, setSabendo] = useState('')
  const [foialuno, setFoialuno] = useState('')

  const [campoobrigatorio, setCampoobrigatorio] = useState('')
  const [inscricaoigual, setInscricaoigual] = useState('')

  async function inscrever() {

    // Verifica se os campos obrigatórios estão preenchidos
    if (!(nome && email && telefone && bairro && sabendo && foialuno)) {
      // Caso algum campo obrigatório esteja vazio, exibe uma mensagem de erro
      setCampoobrigatorio('⚠ Campos obrigatórios não preenchidos');
      return;
    }

    try {




      // Exibe um alerta de confirmação antes de salvar
      confirmAlert({
        title: 'Confirmar inscrição',
        message: 'Deseja salvar os dados?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              let inscricao = {
                nm_nome: nome,
                ds_email: email,
                nr_telefone: telefone,
                nm_bairro: bairro,
                ds_sabendo: sabendo,
                ds_foialuno: foialuno,
              };

              let url = 'http://localhost:5000/inserir';
              let resposta = await axios.post(url, inscricao);
              if (resposta.status === 200) {
                window.location.href = 'http://localhost:3000/reservado';
              }
            },
          },
          {
            label: 'Não',
            onClick: () => {
              // Não faz nada se o usuário pressionar "Não"
            },
          },
        ],
      });

      // Chama a função verificarDuplicado para verificar se o telefone já existe
      const duplicado = await verificarDuplicado('http://localhost:5000', telefone);
      if (duplicado) {
        setInscricaoigual('⚠ Este número de telefone já foi registrado.');
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }



  async function verificarDuplicado(apiUrl, telefone) {
    try {
      const response = await axios.get(`${apiUrl}/verificarDuplicado/${telefone}`);

      // Verifica se a resposta da API indica que o telefone está duplicado
      if (response.data && response.data.duplicado) {
        return true
      } else {
        return false; // Retorna falso se o telefone não estiver duplicado
      }
    } catch (error) {
      console.error(error);
      throw error; // Trata erros de forma apropriada de acordo com sua lógica
    }
  }


  return (
    <div className="pagina-ingresso">
      <Cabecalho />
      <div className="faixa-inscricao">
        <img src="/assets/images/faixa.png" alt="" />
      </div>

      <nav className='meio'>
        <div>

          <h1>Inscrição</h1>
        </div>

        <article>
          <aside>
            <div>
              <h1>Nome</h1>
              <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Ex: João Lucas da Silva"></input>
            </div>

            <div>
              <h1>E-MAIL</h1>
              <InputMask type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ex: nome123@gmail.com" maskPlaceholder={setEmail} required />
            </div>

            <div>
              <h1>Número de telefone</h1>
              <InputMask mask="(99) 99999-9999" maskChar=" " value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Ex: (11) 99999-5555" required />
            </div>
          </aside>

          <aside>
            <div>
              <h1>Bairro</h1>
              <input value={bairro} onChange={e => setBairro(e.target.value)} placeholder="Ex: Cocaia"></input>
            </div>


            <div>
              <h1>Como ficou sabendo da feira ?</h1>
              <input value={sabendo} onChange={e => setSabendo(e.target.value)} placeholder="Ex: Amigos"></input>
            </div>

            <div>
              <h1>Já foi aluno do FREI ?</h1>
              <input value={foialuno} onChange={e => setFoialuno(e.target.value)} placeholder="Ex: Sim"></input>

            </div>
          </aside>
        </article>

        

        <button onClick={inscrever}>Salvar</button>
        <div>
          <p> {inscricaoigual} </p>
          <p>{inscricaoigual}</p>
        </div>

      </nav>




      <footer className='rodape'>
        <img src="/assets/images/background-quadrados.png" alt="" />
      </footer>
    </div>


  );
}


