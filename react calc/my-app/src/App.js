
import './App.css';
import {useState} from "react"

function App() {
  const[num1,setNum1] = useState("");
  const[num2,setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInputs = () => {
    if (num1.trim() === '' || num2.trim() === '') {
      setErrorMessage('Please enter both numbers.');
      return false;
    }

    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setErrorMessage('Please enter valid numbers.');
      return false;
    }

    return true;
  };

  const handleAddition = () => {
    if (validateInputs()) {
      const result = parseFloat(num1) + parseFloat(num2);
      setResult(result);
      setErrorMessage('');
    }
  };

  const handleSubtraction = () => {
    if (validateInputs()) {
      const result = parseFloat(num1) - parseFloat(num2);
      setResult(result);
      setErrorMessage('');
    }
  };

  const handleMultiplication = () => {
    if (validateInputs()) {
      const result = parseFloat(num1) * parseFloat(num2);
      setResult(result);
      setErrorMessage('');
    }
  };

  const handleDivision = () => {
    if (validateInputs()) {
      if (parseFloat(num2) === 0) {
        setErrorMessage('Cannot divide by zero.');
        setResult(null);
      } else {
        const result = parseFloat(num1) / parseFloat(num2);
        setResult(result);
        setErrorMessage('');
      }
    }
  };

  return (
    <div className="App">
      <h1>REACT CALCULATOR</h1>
      <input
      type="text"
      placeholder="NUM 1"
      onChange={(e)=>setNum1(e.target.value)}
      
      /><br/>
      <input
      type="text"
      placeholder="NUM 2"
      onChange={(e)=>setNum2(e.target.value)}
      
      /><br/>
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button><br/>

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {result && <div style={{ color: 'green' }}>Result: {result}</div>}
      
    </div>
  );
}

export default App;
