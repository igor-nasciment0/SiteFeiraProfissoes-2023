
import "./index.scss"

export default function Ingresso() {
  return (
    <div className="pagina-ingresso">
      <header className="cabecalho">
        <div>
          <img src="/assets/images/logo.png"></img>
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
        <img src="/assets/images/ingresso.png"></img>
        <h2>Ingresso reservado com sucesso !!!
          Esperamos voce no dia 30/09</h2>
          <h2>Em nosso instituto</h2>
        <h1>O numero do seu ingresso é: XLVR5643H</h1>
        <p>deseja alterar alguma informação?
          <a href=""> Clique aqui</a></p>
      </nav>


      <footer>
        <img src="/assets/images/background-quadrados.png"></img>
      </footer>

    </div>
  );
}


