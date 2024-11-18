import { useState } from "react";
import "./NewtonsCalc.css";

function CalculateNewtons() {
  const [a, setGuess] = useState("");
  const [result, setResult] = useState("");

  const calculateRoot = () => {
    let zeroX = parseFloat(a);
    let fOfX = [6, -13, -18, 7, 6];
    let fOf1X = [24, -39, -36, 7];

    let maximunTimesRan = 100;
    let timesRan = 0;
    let acceptableError = 1e-8;

    while (timesRan < maximunTimesRan) {
      let fOfXValue = 0;
      let fOf1XValue = 0;

      for (let i = 0; i < fOfX.length; i++) {
        fOfXValue += fOfX[i] * Math.pow(zeroX, fOfX.length - i - 1);

        if (i < fOf1X.length) {
          fOf1XValue += fOf1X[i] * Math.pow(zeroX, fOf1X.length - i - 1);
        }
      }

      let nextX = zeroX - fOfXValue / fOf1XValue;

      if (Math.abs(fOfXValue) < acceptableError) {
        break;
      }

      zeroX = nextX;
      timesRan++;
    }
    setResult(zeroX.toFixed(2));
  };

  return (
    <>
      <h1>Newton’s Method</h1>
      <label htmlFor="guess">Root Guess:</label>
      <br />
      <input
        type="number"
        id="guess"
        value={a}
        onChange={(e) => setGuess(e.target.value)}
        required
      />
      <br />
      <br />
      <label>Root Approximation(Result):</label>
      <br />
      <input type="text" id="newton-result" value={result} readOnly />
      <br />
      <br />

      <button onClick={calculateRoot}>Calculate </button>
    </>
  );
}
export default CalculateNewtons;
