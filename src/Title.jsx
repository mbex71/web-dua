import React from "react";

const Title = (props) => {
  return <h1>Web testing untuk {props.title ? props.title : null}</h1>;
};

export default Title;
