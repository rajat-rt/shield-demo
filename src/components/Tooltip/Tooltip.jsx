import React from "react";
import "./tooltip.css";

const Tooltip = ({ message, children }) => {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className="tooltip-content">
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
