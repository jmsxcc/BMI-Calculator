import { useState, useRef } from "react";
import "./App.css";
import BMIResult from "./components/BMIResult";

function App() {
  const [bmi, setBmi] = useState(0);

  const heightRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);

  const calculateBMI = () => {
    const weight = weightRef.current?.value || 0;
    const height = heightRef.current?.value || 0;

    const bmi = Number(weight) / (Number(height) / 100) ** 2;
    setBmi(bmi);

    console.log("weight", weight);
    console.log("height", height);
    console.log("bmi", bmi);
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="con-result">
        <BMIResult bmi={bmi} />
      </div>

      <label>Weight (kg)</label>
      <input type="number" name="weight" ref={weightRef} />

      <label>Height (cm)</label>
      <input type="number" name="height" ref={heightRef} />

      <button type="button" onClick={calculateBMI}>
        Calculator
      </button>
    </div>
  );
}

export default App;
