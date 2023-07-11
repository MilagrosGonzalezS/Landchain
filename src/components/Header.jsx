import "../style.css";
import logo from "../imgs/logo.png";

function Header() {
  const handleClick = () => {
    const link = document.createElement("a");
    link.setAttribute("href", "#form-section");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () {
      location.reload();
    }, 500);
  };
  return (
    <>
      <nav className="navBar">
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="landchain logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#how-it-works">Cómo funciona</a>
          </li>
          <li>
            <button onClick={handleClick} className="subscribe">
              Suscribirme
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
