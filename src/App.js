import { useState } from "react";
import "./app.css";
import Buttons from "./components/Buttons/index";
import CalculationScreen from "./components/CalculationScreen/index";
import Theme from "./components/Theme/index";
function App() {
  const [input, setInput] = useState([]);

  const [calculate, setCalculate] = useState(false);

  if (calculate === true) {
    const regex = input.join("").match(/\d+/g);

    const islem = input.join("").match(/([-+*/])/g);
  }

  return (
    <>
      <div className="mainDiv" id="theme1">
        <Theme />
        <CalculationScreen input={input} setInput={setInput} />
        <Buttons
          input={input}
          setInput={setInput}
          setCalculate={setCalculate}
        />
      </div>
    </>
  );
}

export default App;
