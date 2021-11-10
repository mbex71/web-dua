import React from "react";

const Title = (props) => {
  return <h1>Web 2 Cok {props.title ? props.title : null}</h1>;
};

export default Title;
