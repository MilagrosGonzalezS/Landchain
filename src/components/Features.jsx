import "../style.css";
import features from "../imgs/features.png";

function Features() {
  return (
    <>
      <div className="features">
        <div>
          <img src={features} alt="logos" />
        </div>
        <ul>
          <li>fácil</li>
          <li>rápido</li>
          <li>seguro</li>
        </ul>
      </div>
    </>
  );
}

export default Features;
