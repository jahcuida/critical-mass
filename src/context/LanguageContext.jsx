// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState } from "react";
import es from "../data/es.json";
import en from "../data/en.json";

const LanguageContext = createContext();

const languages = {
  es,
  en,
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  // Función para obtener la traducción por clave
  const t = (key) => {
    return languages[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personalizado para usar el contexto fácilmente
export function useLanguage() {
  return useContext(LanguageContext);
}
