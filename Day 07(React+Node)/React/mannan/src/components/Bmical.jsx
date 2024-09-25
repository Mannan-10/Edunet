import React, { useState } from 'react';

const Bmical = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [result, setResult] = useState('');

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setResult('Underweight');
    } else if (bmiValue < 25) {
      setResult('Normal');
    } else if (bmiValue < 30) {
      setResult('Overweight');
    } else {
      setResult('Obese');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBmi();
  };

  return (
    <>
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Weight (kg)</label>
          <input type="number" value={weight} onChange={handleWeightChange} />
          <br />
          <label htmlFor="">Height (cm)</label>
          <input type="number" value={height} onChange={handleHeightChange} />
          <br />
          <button type="submit">Calculate</button>
          <br />
          <p>BMI: {bmi.toFixed(2)}</p>
          <p>Result: {result}</p>
        </form>
      </div>
    </>
  );
};

export default Bmical;