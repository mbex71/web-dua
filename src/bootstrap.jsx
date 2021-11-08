import React from "react";
import { render } from "react-dom";
import Title from "./Title";

const App = () => {
  return (
    <div>
      <h1>Hallo Web 2</h1>
      <Title />
    </div>
  );
};

render(<App />, document.getElementById("app"));
