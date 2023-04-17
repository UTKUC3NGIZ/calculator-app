import "./style.css";

function Buttons() {
  return (
    <>
      <div className="mainButtons">
        <div>
          <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="functionButtonBlue">DEL</button>
          </div>
          <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
          </div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
          </div>
          <div>
            <button>.</button>
            <button>0</button>
            <button>/</button>
            <button>x</button>
          </div>
          <div>
            <button className="functionButtonBlue">RESET</button>
            <button className="functionButtonRed">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
