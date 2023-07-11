import "../style.css";
import card1 from "../imgs/imgcard1.png";
import card2 from "../imgs/imgcard2.png";
import card3 from "../imgs/imgcard3.png";

function HowItWorks() {
  return (
    <>
      <div className="how-it-works" id="how-it-works">
        <h2>
          ¿Cómo <span>funciona?</span>
        </h2>
        <p>
          Nunca creíste poder invertir en hectáreas de la manera más fácil y en
          tan pocos pasos.
        </p>
        <div className="cards">
          <div className="card">
            <div>
              <img src={card1} alt="person icon" />
            </div>
            <p>Registrate/iniciá sesión en la web de landchain</p>
          </div>
          <div className="card">
            <div>
              <img src={card2} alt="field icon" />
            </div>
            <p>
              Elegí entre las opciones el campo ideal para invertir y las
              hectáreas deseables.
            </p>
          </div>
          <div className="card">
            <div>
              <img src={card3} alt="contract icon" />
            </div>
            <p>
              Firmá los contratos inteligentes necesarios que respaldan la
              propiedad. Transferí fondos, invertí y se generará tu token.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
