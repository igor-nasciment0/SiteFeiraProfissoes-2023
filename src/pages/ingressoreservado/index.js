import Cabecalho from "../../components/cabecalho";
import "./index.scss"
import { Link } from "react-router-dom";

export default function Ingresso() {
  return (
    <div className="pagina-ingresso-concluido">
      <Cabecalho />

      <div className="faixa-ingresso">
        <img src="/assets/images/faixa.png" alt="" />
      </div>

      <main>
        <nav>
          <h2>Ingresso reservado com sucesso!</h2>
          <img src="/assets/images/ingressoImagem.png" alt="" />
          <p>Esperamos você no dia 30/09 <br/> em nosso Instituto.</p>

          <Link to={"/"}>Voltar</Link>
        </nav>
      </main>
      
    </div>
  );
}