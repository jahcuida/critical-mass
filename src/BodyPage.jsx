import { useState } from 'react';
import "./App.css";

export default function BodyPage(){
  const[showHola, setShowHola] = useState(true);
  const[showQue, setShowQue] = useState(false);
  const[showTal, setShowTal] = useState(false);

  function handleShowHola(){
    if(showHola == false && (showQue == true || showTal == true )){
      setShowHola(true);
      setShowQue(false);
      setShowTal(false);
    }
  }

  function handleShowQue(){
    if(showQue == false && (showHola == true || showTal == true )){
      setShowQue(true);
      setShowHola(false);
      setShowTal(false);
    }
  }

  function handleShowTal(){
    if(showTal == false && (showQue == true || showHola == true )){
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
            <li><button onClick={handleShowHola}>Hola</button></li>
            <li><button onClick={handleShowQue}>que</button></li>
            <li><button onClick={handleShowTal}>tal</button></li>
          </ul>
        </div>
        <div className="list-content">
          {showHola && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam fuga
          cum voluptatum corrupti expedita, repudiandae, modi velit illum alias
          voluptatibus excepturi? Obcaecati odio rerum quis velit nulla. Vero,
          sed culpa.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam fuga
          cum voluptatum corrupti expedita, repudiandae, modi velit illum alias
          voluptatibus excepturi? Obcaecati odio rerum quis velit nulla. Vero,
          sed culpa.</p>}
          {showQue && <p> asidklfjaiosidu oasfoia jsklañh pqwoiunhjs </p>}
          {showTal && <p> Pepito fumo un cigarrito de pablito, qué cigarrito dio pablito a pepito? </p>}
        </div>
      </div>
    </>
  );
}