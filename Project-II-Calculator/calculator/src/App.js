import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton';
import MathButtons from './components/ButtonComponents/MathButtons'

const mathSymbols = [{
    text: '÷',
  },{
    text: '×',
  },{
    text: '-',
  },{
    text: '+',
  },{
    text: '=',
  },
]

const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay />
      <div className='work'>
        <div className='work-buttons'>
          {mathSymbols.map(symbol => {
            return <MathButtons symbols={symbol}/>
          })}
        </div>
        <ActionButton />
      </div>
    </div>
  );
};

export default App;
