import { useState } from "react";
import "./HeronCalc.css";

function HeronsFormula() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  const calculateArea = () => {
    const sideA = parseFloat(a);
    const sideB = parseFloat(b);
    const sideC = parseFloat(c);

    let area;
    let inside;
    let secoundStep;

    inside = Math.pow(
      Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2),
      2
    );
    secoundStep = 4 * Math.pow(sideA, 2) * Math.pow(sideB, 2) - inside;

    area = (1 / 4) * Math.sqrt(secoundStep);
    setResult(area.toFixed(2));
  };

  return (
    <>
      <div>
        <h1>Heron's formula</h1>
        <label htmlFor="a">side a:</label>
        <br />
        <input
          type="number"
          id="a"
          value={a}
          onChange={(e) => setA(e.target.value)}
          required
        />
        <br />
        <br />
      </div>

      <div>
        <label htmlFor="b">side b:</label>
        <br />
        <input
          type="number"
          id="b"
          value={b}
          onChange={(e) => setB(e.target.value)}
          required
        />
        <br />
        <br />
      </div>

      <div>
        <label htmlFor="c">side c:</label>
        <br />
        <input
          type="number"
          id="c"
          value={c}
          onChange={(e) => setC(e.target.value)}
          required
        />
        <br />
        <br />
      </div>

      <label>Area (Result):</label>
      <br />
      <input type="text" id="result-heron" value={result} readOnly />
      <br />
      <br />

      <button onClick={calculateArea}>Calculate Area</button>
    </>
  );
}

export default HeronsFormula;
