import { useState } from "react";
import "./app.css";
import Buttons from "./components/Buttons/index";
import CalculationScreen from "./components/CalculationScreen/index";
import Theme from "./components/Theme/index";
function App() {
  const [input, setInput] = useState([]);

  const regex = input.join("").match(/\d+/g);
  console.log(Number(regex));

  // const desen = /\+ /g;

  return (
    <>
      <div className="mainDiv">
        <Theme />
        <CalculationScreen input={input} setInput={setInput} />
        <Buttons input={input} setInput={setInput} />
      </div>
    </>
  );
}

export default App;
