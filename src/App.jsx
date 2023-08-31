
import "./styles/App.css";
import Header from "./Header";
import BodyPage from "./BodyPage";
import Slider from "./Slider";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Header></Header>
      <div className="grey">
      </div>
      <Navbar></Navbar>
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
