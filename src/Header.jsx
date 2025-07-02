import "./styles/Header.css";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiTwotoneMail } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { useLanguage } from "./context/LanguageContext";
import React from "react";

export default function Header({ darkMode, setDarkMode }) {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="fixed-buttons">
        <button onClick={toggleLanguage} className="lang-button">
          {language === "es" ? "EN" : "ES"}
        </button>

        <button
          onClick={toggleDarkMode}
          className="darkmode-button"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <FiSun size={20} className="darkmode-icon" />
          ) : (
            <FiMoon size={20} className="darkmode-icon" />
          )}
        </button>
      </div>

      <header>
        <div id="header-logo">
          <img
            src={
              darkMode
                ? "https://i.postimg.cc/VNmBdD0K/logoA.png"
                : "https://i.postimg.cc/MKtbbjfK/logoB.png"
            }
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
                <i>
                  <AiFillInstagram />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/people/Masa-Cr%C3%ADtica-Granada/100094417255784/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
