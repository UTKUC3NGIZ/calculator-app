import "./style.css";
function CalcScren(props) {
  return (
    <>
      <div className="CalcScrenMain" id={`CalcScrenMain${props.state.theme}`}>
        <span>{props.input}</span>
      </div>
    </>
  );
}

export default CalcScren;
