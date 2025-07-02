import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./Header";
import Slider from "./Slider";
import BodyPage from "./BodyPage";
import Carteles from "./Carteles";
import Galeria from "./Galeria";
import Footer from "./Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Al montar el componente, cargamos el modo guardado en localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");

      const root = document.getElementById("root");
      if (root) root.classList.add("dark-mode");
    }
  }, []);

  // Cuando cambie darkMode, guardamos en localStorage y actualizamos body y root
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    const root = document.getElementById("root");

    if (darkMode) {
      document.body.classList.add("dark-mode");
      if (root) root.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      if (root) root.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`grey ${darkMode ? "dark" : ""}`}></div>

      <Slider darkMode={darkMode} />
      <div className={`grey ${darkMode ? "dark" : ""}`}></div>

      <BodyPage darkMode={darkMode} />
      <div className={`grey ${darkMode ? "dark" : ""}`}></div>

      <Galeria darkMode={darkMode} />

      <div className={`grey ${darkMode ? "dark" : ""}`}></div>

      <Carteles darkMode={darkMode} />
      <div className={`grey ${darkMode ? "dark" : ""}`}></div>

      <Footer />
    </>
  );
}

export default App;
