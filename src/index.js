import React from "react";
import ReactDOM from "react-dom";
import "./Sass/styles.scss";

const HelloWorld = () => {
  return (
    <div>
      <nav>
        <ul>
          <li> Home </li> <li> About </li> <li> FAQ </li>{" "}
        </ul>{" "}
      </nav>{" "}
      <div className="heading">
        <h1> Springfield’ s Annual Mango Festival </h1>{" "}
        <span> Starts: 7 / 16 / 2022– 7 / 19 / 2022 </span>{" "}
      </div>{" "}
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
