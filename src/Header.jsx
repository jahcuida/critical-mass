import massLogo from "./assets/logo.png";
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
              <a href="#">
                <i>
                  <AiFillInstagram />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
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
