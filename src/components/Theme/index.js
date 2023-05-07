import React from "react";

import "./style.css";
function Theme(props) {
  function themeFunction() {
    if (props.state.theme === "Theme1") {
      props.dispatch({ type: "Theme2" });
    } else if (props.state.theme === "Theme2") {
      props.dispatch({ type: "Theme3" });
    } else {
      props.dispatch({ type: "Theme1" });
    }
  }

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
            <span
              className="bar__themeAnimation"
              id={`bar${props.state.theme}`}
              onClick={themeFunction}
            >
              <span></span>
            </span>
          </span>
        </div>
      </section>
    </>
  );
}

export default Theme;
