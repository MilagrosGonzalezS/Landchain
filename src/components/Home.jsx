import "../style.css";
import Header from "./Header";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <div className="home-overlay">
          <Header />
          <div className="home-container">
            <h1>
              Ahora podés <span>invertir</span> <br></br>y{" "}
              <span>ser dueño</span> de tus hectáreas de campo.
            </h1>
            <p>
              Sé parte de Landchain, una plataforma que te permitirá invertir y
              ser dueño de la cantidad de hectáreas de campo que quieras
              mediante la compra de tokens transables, accediendo a su renta y
              apreciación de valor.
            </p>
            <p>
              Protegé y aumentá tus ahorros invirtiendo en uno de los activos
              más escasos del planeta. Invertí con Landchain.
            </p>
            <button>
              <a href="#how-it-works">Quiero saber más</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
