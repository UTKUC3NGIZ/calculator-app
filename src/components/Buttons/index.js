import { useState } from "react";
import "./style.css";

function Buttons() {
  const [input, setInput] = useState([]);
  console.log(input);


  return (
    <>
      <div className="mainButtons">
        <div>
          <div>
            <button onClick={() => setInput([...input, "7"])}>7</button>
            <button onClick={() => setInput([...input, "8"])}>8</button>
            <button onClick={() => setInput([...input, "7"])} >9</button>
            <button className="functionButtonBlue" onClick={() => setInput([...input, "del"])} >DEL</button>
          </div>
          <div>
            <button onClick={() => setInput([...input, "4"])} >4</button>
            <button onClick={() => setInput([...input, "5"])} >5</button>
            <button onClick={() => setInput([...input, "6"])} >6</button>
            <button onClick={() => setInput([...input, "+"])} >+</button>
          </div>
          <div>
            <button onClick={() => setInput([...input, "1"])} >1</button>
            <button onClick={() => setInput([...input, "2"])} >2</button>
            <button onClick={() => setInput([...input, "3"])} >3</button>
            <button onClick={() => setInput([...input, "-"])} >-</button>
          </div>
          <div>
            <button onClick={() => setInput([...input, "."])} >.</button>
            <button onClick={() => setInput([...input, "0"])} >0</button>
            <button onClick={() => setInput([...input, "/"])} >/</button>
            <button onClick={() => setInput([...input, "x"])} >x</button>
          </div>
          <div>
            <button className="functionButtonBlue" onClick={() => setInput([...input, "reset"])}>RESET</button>
            <button className="functionButtonRed" onClick={() => setInput([...input, "="])}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
