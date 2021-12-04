import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import fibonacci from './fibonacci';

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("result").innerHTML = "Wynik: <br />"+fibonacci(inputs.num);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ciag fibonacciego</h1>
        <form onSubmit={handleSubmit}>
          <p>  
            <label>Podaj liczbe: </label><br />
              <input
              type="number"
              name="num"
              value={inputs.num || ""}
              onChange={handleChange}
              /><br /><br />
            <input type="submit" value="Wyslij"/>
          </p>
        </form>
        <div id="result"></div>
      </header>
    </div>
  );
}

export default App;
