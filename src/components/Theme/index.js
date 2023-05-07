import "./style.css";
function Theme(props) {
  return (
    <>
      <section className="themeMain" id={`main${props.state.theme}`}>
        <div>
          <h1>calc</h1>
        </div>
        <div>
          <h3>THEME</h3>
          <span className="bar">
           <span className="bar__theme">1 2 3</span>
           <span className="bar__themeAnimation">
            <span></span>
           </span>
          </span>
        </div>
      </section>
    </>
  );
}

export default Theme;
