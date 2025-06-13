import "./styles/App.css";
import Header from "./Header";
import Slider from "./Slider";
import BodyPage from "./BodyPage";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <div className="grey"></div>

      <Slider />
      <div className="grey"></div>

      <BodyPage />
      <div className="grey"></div>

      <Footer />

    
    </>
  );
}

export default App;
