import { useState } from "react";
import "./PolynomialFunc.css";

function PolynomialFuncion() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [polynomialFormula, setPolynomialFormula] = useState(""); // Polynomial equation
  const [evaluationResult, setEvaluationResult] = useState(""); // Polynomial evaluation result

  const calculatePolynomial = () => {
    let coeffecent = [];
    coeffecent = a;
    coeffecent = coeffecent.split(" ");

    let exponents = [];
    exponents = b;
    exponents = exponents.split(" ");

    const xValue = parseFloat(c);

    let equation = "f(x)=";
    let solution = 0;

    for (let i = 0; i < coeffecent.length; i++) {
      if (i > 0 && coeffecent[i] >= 0) {
        equation += "+";
      }

      equation += coeffecent[i] + "x^" + exponents[i];
    }

    for (let i = 0; i < coeffecent.length; i++) {
      solution += coeffecent[i] * Math.pow(xValue, exponents[i]);
    }
    setPolynomialFormula(equation);
    setEvaluationResult("f(" + xValue + ")=" + solution);
  };

  return (
    <>
      <h1>Polynomial Function:</h1>
      <label htmlFor="a">Coeffecients:</label>
      <br />
      <input
        type="text"
        id="a"
        value={a}
        onChange={(e) => setA(e.target.value)}
        required
      />
      <br />
      <br />
      <label htmlFor="b">Exponents:</label>
      <br />
      <input
        type="text"
        id="b"
        value={b}
        onChange={(e) => setB(e.target.value)}
        required
      />
      <br />
      <br />
      <label htmlFor="c">X-Value:</label>
      <br />
      <input
        type="text"
        id="c"
        value={c}
        onChange={(e) => setC(e.target.value)}
        required
      />
      <br />
      <br />
      <label>Polynomial Function(Result):</label>
      <br />
      <input
        type="text"
        id="polynomial-function"
        value={polynomialFormula}
        readOnly
      />
      <br />
      <br />
      <label>Polynomial Evaluation(Result):</label>
      <br />
      <input
        type="text"
        id="polynomial-evaluation"
        value={evaluationResult}
        readOnly
      />
      <br />
      <br />

      <button onClick={calculatePolynomial}>Calculate</button>
    </>
  );
}
export default PolynomialFuncion;
