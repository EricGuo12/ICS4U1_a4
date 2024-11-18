import { useState } from "react";
import "./AmbiguousCalc.css";

function CalculateAmbiguous() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  function degreesToRadians(num) {
    return (Math.PI / 180) * num;
  }

  const calculateType = () => {
    const aAngle = degreesToRadians(parseFloat(a));
    const aSide = parseFloat(b);
    const bSide = parseFloat(c);

    const h = bSide * Math.sin(aAngle);

    let triangleResult = "";

    if (aAngle < Math.PI / 2) {
      if (aSide < h) {
        triangleResult = "no triangle";
      } else if (aSide === h) {
        triangleResult = "right triangle";
      } else {
        if (aSide < bSide) {
          triangleResult = "two triangles (ambiguous case)";
        } else {
          triangleResult = "one triangle";
        }
      }
    } else if (aAngle > Math.PI / 2) {
      if (aSide < bSide || aSide === h) {
        triangleResult = "no triangle";
      } else if (aSide > bSide) {
        triangleResult = "one triangle";
      }
    } else {
      triangleResult = "right triangle";
    }

    setResult(triangleResult);
  };

  return (
    <>
      <h1>Ambiguous Case</h1>
      <label htmlFor="a">Angle A:</label>
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
      <label htmlFor="b">side A:</label>
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
      <label htmlFor="c">side B:</label>
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
      <label>Triangle Type(Result):</label>
      <br />
      <input type="text" id="ambiguous-result" value={result} readOnly />
      <br />
      <br />

      <button onClick={calculateType}>Calculate Triangle Type</button>
    </>
  );
}
export default CalculateAmbiguous;
