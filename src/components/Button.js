import PropTypes from "prop-types";
import React from "react";

const Button = ({ text, color, onAdd }) => {
  return (
    <button onClick={onAdd} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Default",
  color: "steelblue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
