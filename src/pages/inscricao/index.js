import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import InputMask from 'react-input-mask';


export default function Ingresso() {

const [nome, setNome] = useState('')
const [chamado, setChamado] = useState('')
const [email, setEmail] = useState('')
const [telefone, setTelefone] = useState('')
const [bairro, setBairro] = useState('')
const [previsao, setPrevisao] = useState('')
const [sabendo, setSabendo] = useState('')
const [foialuno, setFoialuno] = useState('')


async function inscrever() {
    // Verifica se os campos obrigatórios estão preenchidos
    if (!nome || !email || !telefone) {
      alert('Os campos nome, email e telefone são obrigatórios.');
      return;
    }
  
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
              nm_ser_chamado: chamado,
              ds_email: email,
              nr_telefone: telefone,
              nm_bairro: bairro,
              ds_prev_chegada: previsao,
              ds_sabendo: sabendo,
              ds_foialuno: foialuno,
            };

            try {
              let url = 'http://localhost:5000/inserir';
              let resposta = await axios.post(url, inscricao);
  
              if (resposta.status === 200) {
                alert('Dados salvos com sucesso!');
              } else {
                alert('Erro ao salvar os dados. Tente novamente.');
              }
            } catch (error) {
              alert('Erro ao salvar os dados. Tente novamente.');
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
  }


  return (
    <div className="pagina-ingresso">
      <header>
        <div>
          <img src="/assets/images/frei.png"></img>
        </div>

        <div>
          <h1>Feira de Profissões 2023</h1>
        </div>

        <div>
          <h2>Bem-vindo</h2>
        </div>
      </header>
      <div className="faixa">
        <img src="/assets/images/faixa.png"></img>
      </div>

      <nav>
        <div>
          <h1>Inscrição</h1>
        </div>

        <article>
          <aside>
            <div>
              <h1>Nome</h1>
              <input value={nome} onChange={e => setNome(e.target.value)} placeholder="  Ex: João Lucas da Silva"></input>
            </div>

            <div>
              <h1>Como gostaria de ser chamado?</h1>
              <input value={chamado} onChange={e => setChamado(e.target.value)} placeholder="  Ex: João"></input>
            </div>

            <div>
              <h1>E-MAIL</h1>
              <InputMask type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="  Ex: nome123@gmail.com" required />
            </div>

            <div>
              <h1>Número de telefone</h1>
              <InputMask mask="(99) 99999-9999" maskChar=" " value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="  Ex: (11) 99999-5555" required />
            </div>
          </aside>

          <aside>
            <div>
              <h1>Bairro</h1>
              <input value={bairro} onChange={e => setBairro(e.target.value)} placeholder="  Ex: Cocaia"></input>
            </div>

            <div>
              <h1>Previsão de chegada:</h1>
              <input value={previsao} onChange={e => setPrevisao(e.target.value)} placeholder="Ex: 10:30"></input>
            </div>

            <div>
              <h1>Como ficou sabendo da feira ?</h1>
              <input value={sabendo} onChange={e => setSabendo(e.target.value)} placeholder="  Ex: Amigos"></input>
            </div>

            <div>
              <h1>Já foi aluno do FREI ?</h1>
              <input value={foialuno} onChange={e => setFoialuno(e.target.value)} placeholder="  Ex: Sim"></input>

            </div>
          </aside>
        </article>

        <button onClick={inscrever}>Salvar</button>
      </nav>


      <footer>
        <img src="/assets/images/fundo.png"></img>
      </footer>

    </div>
  );
}


