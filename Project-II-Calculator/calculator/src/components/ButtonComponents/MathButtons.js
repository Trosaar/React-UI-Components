import React from 'react';
import './Button.css';

const MathButtons = (props) => {
  return (
    <button className="math-symbols">{props.symbols.text}</button>
  );
};

export default MathButtons;
