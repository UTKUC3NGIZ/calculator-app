import "./style.css";

function Buttons(props) {
  return (
    <>
      <div className="mainButtons">
        <div>
          <div>
            <button onClick={() => props.setInput([...props.input, "7"])}>
              7
            </button>
            <button onClick={() => props.setInput([...props.input, "8"])}>
              8
            </button>
            <button onClick={() => props.setInput([...props.input, "7"])}>
              9
            </button>
            <button
              className="functionButtonBlue"
              onClick={() => props.setInput([...props.input, "del"])}
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
            <button onClick={() => props.setInput([...props.input, "x"])}>
              x
            </button>
          </div>
          <div>
            <button
              className="functionButtonBlue"
              onClick={() => props.setInput([...props.input, "reset"])}
            >
              RESET
            </button>
            <button
              className="functionButtonRed"
              onClick={() => props.setInput([...props.input, "="])}
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
