import "./style.css";

function Buttons(props) {
  function Reset() {
    props.setCalculate(false);
    props.setInput([" "]);
  }

  return (
    <>
      <div className="mainButtons" id={`button${props.state.theme}`}>
        <div>
          <div>
            <button onClick={() => props.setInput([...props.input, "7"])}>
              7
            </button>
            <button onClick={() => props.setInput([...props.input, "8"])}>
              8
            </button>
            <button onClick={() => props.setInput([...props.input, "9"])}>
              9
            </button>
            <button
              className="functionButton"
              onClick={() => props.setInput([...props.input.slice(0, -1)])}
            >
              DEL
            </button>
          </div>
          <div>
            <button onClick={() => props.setInput([...props.input, "4"])}>
              4
            </button>
            <button onClick={() => props.setInput([...props.input, "5"])}>
              5
            </button>
            <button onClick={() => props.setInput([...props.input, "6"])}>
              6
            </button>
            <button onClick={() => props.setInput([...props.input, "+"])}>
              +
            </button>
          </div>
          <div>
            <button onClick={() => props.setInput([...props.input, "1"])}>
              1
            </button>
            <button onClick={() => props.setInput([...props.input, "2"])}>
              2
            </button>
            <button onClick={() => props.setInput([...props.input, "3"])}>
              3
            </button>
            <button onClick={() => props.setInput([...props.input, "-"])}>
              -
            </button>
          </div>
          <div>
            <button onClick={() => props.setInput([...props.input, "."])}>
              .
            </button>
            <button onClick={() => props.setInput([...props.input, "0"])}>
              0
            </button>
            <button onClick={() => props.setInput([...props.input, "/"])}>
              /
            </button>
            <button onClick={() => props.setInput([...props.input, "*"])}>
              x
            </button>
          </div>
          <div>
            <button className="functionButton" onClick={Reset}>
              RESET
            </button>
            <button
              className="functionButtonResult"
              onClick={() => props.setCalculate(true)}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
