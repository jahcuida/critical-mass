import massLogo from "./assets/logoB.jpg";
import "./styles/Header.css";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiTwotoneMail } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <header>
        <div id="header-logo">
          <img src={massLogo} className="logo" alt="Critical mass logo" />
        </div>
        <div>
          <div>
            <h1>MASA CRÍTICA GRANADA</h1>
          </div>
        </div>
        <div className="header-social">
          <ul>
            <li>
              <a href="https://www.instagram.com/masacriticagranada/" target="_blank">
                <i>
                  <AiFillInstagram />
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/people/Masa-Cr%C3%ADtica-Granada/100094417255784/" target="_blank">
                <i>
                  <BiLogoFacebookCircle />
                </i>
              </a>
            </li>
            <li>
              <a>
                <i>
                  <AiTwotoneMail />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
