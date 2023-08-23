import { useState } from "react";
import "./styles/BodyPage.css";

export default function BodyPage() {
  const [showHola, setShowHola] = useState(true);
  const [showQue, setShowQue] = useState(false);
  const [showTal, setShowTal] = useState(false);

  function handleShowHola() {
    if (showHola == false && (showQue == true || showTal == true)) {
      setShowHola(true);
      setShowQue(false);
      setShowTal(false);
    }
  }

  function handleShowQue() {
    if (showQue == false && (showHola == true || showTal == true)) {
      setShowQue(true);
      setShowHola(false);
      setShowTal(false);
    }
  }

  function handleShowTal() {
    if (showTal == false && (showQue == true || showHola == true)) {
      setShowTal(true);
      setShowHola(false);
      setShowQue(false);
    }
  }

  return (
    <>
      <div className="main">
        <div className="list">
          <ul>
            <li>
              <button onClick={handleShowHola}>El movimiento</button>
            </li>
            <li>
              <button onClick={handleShowQue}>Información útil</button>
            </li>
            <li>
              <button onClick={handleShowTal}>Algo más?</button>
            </li>
          </ul>
        </div>
        <div className="list-content">
          {showHola && (
            <p>
              {" "}
              Es un fenómeno ciclista tiene lugar todos los meses en numerosas
              ciudades del mundo. Su finalidad es introducir la movilidad
              sostenible en el debate público y mejorar la seguridad de los
              ciclistas confiando en que se está más seguro cuando se está en
              grupo.<br></br>
              Recorridos en bicicleta como Masa Crítica, con
              cientos de participantes se llevó a cabo por primera vez en Estocolmo, Suecia en
              la década de 1970.Pero las primeras celebraciones dentro de
              la actual ola de la Masa Crítica tuvieron lugar en San Francisco
              (Estados Unidos) en 1992. En un primer momento acudieron tan
              sólo 58 personas, pero en menos de un año ya eran unos 500.
            </p>
          )}
          {showQue && <p> </p>}
          {showTal && (
            <p>
              {" "}
              Pepito fumo un cigarrito de pablito, qué cigarrito dio pablito a
              pepito?{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
