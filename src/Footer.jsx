import massLogo from "./assets/logo-masa-critica-preview.png";
import "./styles/Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiTwotoneMail } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div id="footer-logo">
          <img src={massLogo} className="logo" alt="Critical mass logo" />
        </div>
        <div className="footer-mail">
          <div>
            <AiTwotoneMail />
          </div>
          <a href="mailto:mglprzprz@gmail.com">mglprzprz@gmail.com</a>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="#">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <BiLogoFacebookCircle />
              </a>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
