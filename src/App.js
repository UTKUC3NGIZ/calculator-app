import "./app.css";
import Buttons from "./components/Buttons/index";
import CalculationScreen from "./components/CalculationScreen/index";
import Theme from "./components/Theme/index";
function App() {
  return (
    <>
      <div className="mainDiv">
        <Theme />
        <CalculationScreen />
        <Buttons />
      </div>
    </>
  );
}

export default App;