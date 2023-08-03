import { useState } from "react";
import massLogo from "./assets/logo-masa-critica-preview.png";
import "./App.css";
import BodyPage from "./BodyPage";

function App() {
  return (
    <>
      <header>
        <div id = "header-content">
          <img src={massLogo} className="logo" alt="Critical mass logo" />
          <h1>Masa crítica Granada</h1>
        </div>
      </header>
      <BodyPage/>
    </>
  );
}

export default App;
