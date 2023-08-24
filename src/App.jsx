
import "./styles/App.css";
import Header from "./Header";
import BodyPage from "./BodyPage";
import Footer from "./Footer";
import Slider from "./Slider";

function App() {
  return (
    <>
      <Header></Header>
      <div className="grey">
      </div>
      <Slider></Slider>
      <div className="grey">
      </div>
      <BodyPage/>
      <div className="grey">
      </div>
    </>
  );
}

export default App;
