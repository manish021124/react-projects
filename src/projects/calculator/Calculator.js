import { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [prevCmd, setPrevCmd] = useState(null);
  const [result, setResult] = useState('0');

  function getInput(key, keyName) {
    if (key === 'C') {
      setResult('0');
    } else if (key === '=') {
      getResult();
    } else {
      if (result === '0') {
        keyName === 'number' ? setResult(key) : setResult(result + key);        
      } else {
        setResult(result + key);
      }
    }
  }

  function getResult () {
    let calculatedResult = eval(result);
    setPrevCmd(result);
    setResult(calculatedResult);
  }

  // to not repeat onTouch attribute on every Key 
  function keyComponent (text, keyName, className) {
    return <Key value={text} className={className} onTouch={getInput} keyName={keyName} />;
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className='calculator-wrapper'>
        <div className='screen'>
          <div className='prev-cmd'>{prevCmd}</div>
          <div className='result'>{result}</div>
        </div>
        <div className='keypad'>
          {keyComponent('C', 'clear', 'clear')}
          {keyComponent('%', 'operator')}
          {keyComponent('/', 'operator')}
          {keyComponent('7', 'number')}
          {keyComponent('8', 'number')}
          {keyComponent('9', 'number')}
          {keyComponent('*', 'operator')}
          {keyComponent('4', 'number')}
          {keyComponent('5', 'number')}
          {keyComponent('6', 'number')}
          {keyComponent('-', 'operator')}
          {keyComponent('1', 'number')}
          {keyComponent('2', 'number')}
          {keyComponent('3', 'number')}
          {keyComponent('+', 'operator')}
          {keyComponent('0', 'number', 'zero')}
          {keyComponent('.', 'operator')}
          {keyComponent('=')}
        </div>
      </div>
    </>
  );
}

function Key({ value, className, onTouch, keyName }) { 
  return (
    <div className={`key ${className}`}
      onClick={() => onTouch(value, keyName)}
      name={keyName}>
      {value}
    </div>
  );
}