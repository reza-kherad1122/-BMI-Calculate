import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder='Enter Weight value' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input type="text" placeholder='Enter height value' value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
    </div>
  </div>
  );
}
