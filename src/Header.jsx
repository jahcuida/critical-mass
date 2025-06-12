import "./styles/Header.css";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiTwotoneMail } from "react-icons/ai";
import { useLanguage } from "./context/LanguageContext";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <>
      <button onClick={toggleLanguage} className="lang-button">
        {language === "es" ? "EN" : "ES"}
      </button>

      <header>
        <div id="header-logo">
          <img
            src="https://i.postimg.cc/MKtbbjfK/logoB.png"
            className="logo"
            alt="Critical mass logo"
          />
        </div>

        <div className="header-title">
          <h1>{t("title")}</h1>
        </div>

        <div className="header-social">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/masacriticagranada/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i><AiFillInstagram /></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/people/Masa-Cr%C3%ADtica-Granada/100094417255784/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i><BiLogoFacebookCircle /></i>
              </a>
            </li>
            <li>
              <a>
                <i><AiTwotoneMail /></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
