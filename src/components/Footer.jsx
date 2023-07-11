import "../style.css";
import logo from "../imgs/logo-footer.png";
import instagram from "../imgs/instagram.png";
import email from "../imgs/email.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-logo">
          <a href="#home">
            <img src={logo} alt="landchain logo" />
          </a>
        </div>
        <div className="social-media">
          <div className="instagram">
            <a
              href="https://www.instagram.com/land.chain/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={instagram} alt="instagram icon" />
            </a>
          </div>
          <div>
            <a href="mailto:info.landchain@gmail.com">
              <img src={email} alt="envelope icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
