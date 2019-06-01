import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const numButtons = [{
  text: 1,
},{
  text: 2,
},{
  text: 3,
},{
  text: 4,
},{
  text: 5,
},{
  text: 6,
},{
  text: 7,
},{
  text: 8,
},{
  text: 9,
}]

const ActionButton = () => {
  return (
    <div className='white'>
      <button>
        clear
      </button>
      <div className='numb-buttons'>
      {numButtons.map(num => {
        return <NumberButton text={num} buttonStyle='buttonStyle'/>
      })}
      </div>
      <button>
      0
      </button>
    </div>
  );
};

export default ActionButton;
