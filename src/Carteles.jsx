import { useState } from "react";
import { useLanguage } from "./context/LanguageContext";
import "./styles/Carteles.css";

export default function Carteles() {
  const { t } = useLanguage();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const eventos = [
    {
      src: "https://i.postimg.cc/t46d8pgt/4JULIO25.png",
      alt: "poster julio 2025",
      subtext: "4/07/2025",
    },
    {
      src: "https://i.postimg.cc/NGP1M59k/6JUNIO25.png",
      alt: "poster junio 2025",
      subtext: "6/06/2025",
    },
    {
      src: "https://i.postimg.cc/HsV94QDN/2MAYO25.png",
      alt: "poster mayo 2025",
      subtext: "2/05/2025",
    },
    {
      src: "https://i.postimg.cc/Pr9z6Pd5/4ABRIL25.png",
      alt: "poster abril 2025",
      subtext: "4/04/2025",
    },
    {
      src: "https://i.postimg.cc/pdZjtTM8/7MARZO25.png",
      alt: "poster marzo 2025",
      subtext: "7/03/2025",
    },
    {
      src: "https://i.postimg.cc/6pCRYcHM/7-FEBRERO25.png",
      alt: "poster febrero 2025",
      subtext: "7/02/2025",
    },
    {
      src: "https://i.postimg.cc/1RWKqvT6/3ENERO25.png",
      alt: "poster enero 2025",
      subtext: "3/01/2025",
    },
    {
      src: "https://i.postimg.cc/7hc7QW8W/6-DICIEMBRE24.png",
      alt: "poster diciembre 2024",
      subtext: "6/12/2024",
    },
    {
      src: "https://i.postimg.cc/ZqkHq0QM/1-NOVIEMBRE24.png",
      alt: "poster noviembre 2024",
      subtext: "1/11/2024",
    },
    {
      src: "https://i.postimg.cc/Dzdry6LS/4-OCTUBRE24.png",
      alt: "poster octubre 2024",
      subtext: "4/10/2024",
    },
    {
      src: "https://i.postimg.cc/RVkK7yT3/6-SEPTIEMBRE24.png",
      alt: "poster septiembre 2024",
      subtext: "6/09/2024",
    },
    {
      src: "https://i.postimg.cc/HsxBZq5B/2-AGOSTO24.png",
      alt: "poster agosto 2024",
      subtext: "2/08/2024",
    },
    {
      src: "https://i.postimg.cc/SRjCdp59/5JULIO24.png",
      alt: "poster julio 2024",
      subtext: "5/07/2024",
    },
    {
      src: "https://i.postimg.cc/L6YjZ2jK/7JUNIO24.png",
      alt: "poster junio 2024",
      subtext: "7/06/2024",
    },
    {
      src: "https://i.postimg.cc/g0vDLmFk/3MAYO24.png",
      alt: "poster mayo 2024",
      subtext: "3/05/2024",
    },
    {
      src: "https://i.postimg.cc/TPXj6FL8/5ABRIL24.png",
      alt: "poster abril 2024",
      subtext: "5/04/2024",
    },
    {
      src: "https://i.postimg.cc/pL5kxKsj/1MARZO24.png",
      alt: "poster marzo 2024",
      subtext: "1/03/2024",
    },
    {
      src: "https://i.postimg.cc/mDBSQJB3/2-FEBRERO24.png",
      alt: "poster febrero 2024",
      subtext: "2/02/2024",
    },
    {
      src: "https://i.postimg.cc/85phFvmt/5ENERO24.png",
      alt: "poster enero 2024",
      subtext: "5/01/2024",
    },
    {
      src: "https://i.postimg.cc/qM5Q91x0/1-DICIEMBRE23.png",
      alt: "poster diciembre 2023",
      subtext: "1/12/2023",
    },
  ];

  return (
    <div className="carteles-container">
      <h2>{t("cartelesTitle")}</h2>
      <div className="grid">
        {eventos.map((evento, index) => (
          <div key={index} className="card" onClick={() => toggleActive(index)}>
            <img src={evento.src} alt={evento.alt} />
            <div className={`overlay ${activeIndex === index ? "show" : ""}`}>
              <p>{evento.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
