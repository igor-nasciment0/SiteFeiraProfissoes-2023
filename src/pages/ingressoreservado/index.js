
import Cabecalho from "../../components/cabecalho";
import "./index.scss"

export default function Ingresso() {
  return (
    <div className="pagina-ingresso-concluido">
      <Cabecalho />

      <div className="faixa-ingresso">
        <img src="/assets/images/faixa-reta.png" alt="" />
      </div>

      <nav>
        <img src="/assets/images/ingressoo.png" alt="" />
        <h2>Ingresso reservado com sucesso !!
            Esperamos voce no dia 30/09
            Em nosso instituto</h2>


      </nav>


      <footer>
        <img src="/assets/images/background-quadrados.png" />
      </footer>

    </div>
  );
}


