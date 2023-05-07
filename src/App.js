import { useState, useReducer, useEffect } from "react";
import "./app.css";
import Buttons from "./components/Buttons/index";
import CalculationScreen from "./components/CalculationScreen/index";
import Theme from "./components/Theme/index";

const initialState = { theme: localStorage.getItem("Theme") || "Theme1" };

function reducer(state, action) {
  switch (action.type) {
    case "Theme1":
      return { theme: "Theme1" };
    case "Theme2":
      return { theme: "Theme2" };
    case "Theme3":
      return { theme: "Theme3" };
    default:
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [input, setInput] = useState([]);

  const [calculate, setCalculate] = useState(false);

  localStorage.setItem("Theme", state.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("Theme");
    dispatch({ type: storedTheme });
  }, [state.theme]);

  if (calculate === true) {
    const regex = input.join("").match(/\d+/g);

    const islem = input.join("").match(/([-+*/])/g);
  }

  return (
    <>
      <div className="mainDiv" id={`${state.theme}`}>
        <Theme state={state} dispatch={dispatch} />
        <CalculationScreen input={input} setInput={setInput} state={state} />
        <Buttons
          input={input}
          setInput={setInput}
          setCalculate={setCalculate}
          state={state}
        />
      </div>
    </>
  );
}

export default App;
