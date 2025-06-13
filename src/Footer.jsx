import "./styles/Footer.css";
import { AiTwotoneMail } from "react-icons/ai";
import { useLanguage } from "./context/LanguageContext"; // o donde tengas el contexto

export default function Footer() {
  const { t } = useLanguage();

  return (
    <div className="footer">
      <div id="footer-logo">
        <img
          src="https://i.postimg.cc/VNmBdD0K/logoA.png"
          className="logo"
          alt="Critical mass logo"
        />
      </div>
      <div className="footer-text">
        <div className="footer-info">
          <p>{t("footerEvent")}</p>
        </div>

        <div className="footer-copy">
          <p>{t("footerCopyright")}</p>
        </div>
      </div>
      <div className="footer-mail">
        <div>
          <AiTwotoneMail />
        </div>
        <a href="mailto:mglprzprz@gmail.com">mglprzprz@gmail.com</a>
        <a href="mailto:atienzajobs16@gmail.com">atienzajobs16@gmail.com</a>
      </div>
    </div>
  );
}
