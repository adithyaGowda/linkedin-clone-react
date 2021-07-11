import React from "react";
import "./css/InputOptions.css";

function InputOptions({ title, Icon, color }) {
  return (
    <div className="inputOptions">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOptions;