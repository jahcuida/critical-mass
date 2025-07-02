import "./styles/BodyPage.css";
import { useLanguage } from "./context/LanguageContext";

export default function BodyPage({ darkMode }) {
  const { t } = useLanguage();

  const imageUrls = t("tipsImages");

  return (
    <>
      <div className={`main-body ${darkMode ? "dark" : ""}`}>
        <div className="def">
          <h2>{t("movementTitle")}</h2>
          <p>{t("movementParagraph1")}</p>
          <p>{t("movementParagraph2")}</p>
        </div>
        <div className="map">
          <h2>{t("datePlaceTitle")}</h2>
          <p>{t("datePlaceText")}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.3429796925832!2d-3.6032152612544968!3d37.18393349303506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fce9f8d635e5%3A0xb97d58a5b13dec87!2sJardines%20del%20Triunfo!5e0!3m2!1ses!2ses!4v1699902089191!5m2!1ses!2ses"
            width="550"
            height="250"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Jardines del Triunfo"
          ></iframe>
        </div>
        <div className="masaApp">
          <h2>{t("appTitle")}</h2>
          <p>{t("appText")}</p>
          <img
            src="https://i.postimg.cc/pTdZ9KJj/app.png"
            className="app"
            alt="app"
          />
          <button>
            <a
              href="https://www.criticalmaps.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="white"
            >
              {t("clickHere")}
            </a>
          </button>
        </div>
      </div>

      <div className={`grey ${darkMode ? "dark" : ""}`}></div>

      <h2 className={darkMode ? "dark" : ""}>{t("tipsTitle")}</h2>

      <div className={`section ${darkMode ? "dark" : ""}`}>
        <div className="container">
          <div className="grid-row">
            {Array.isArray(imageUrls) &&
              imageUrls.map((url, index) => (
                <div className="grid-item" key={index}>
                  <img src={url} alt={`Imagen ${index + 1}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
