
import massLogo from "./assets/logo-masa-critica-preview.png";
import "./styles/App.css";
import BodyPage from "./BodyPage";
import Footer from "./Footer";
import Slider from "./Slider";

function App() {
  return (
    <>
      <header>
        <div id = "header-content">
          <img src={massLogo} className="logo" alt="Critical mass logo" />
          <h1>Masa crítica Granada</h1>
        </div>
      </header>
      <div className="grey">
      </div>
      <Slider></Slider>
      <div className="grey">
      </div>
      <BodyPage/>
      <div className="grey">
      </div>
      <Footer/>
    </>
  );
}

export default App;
