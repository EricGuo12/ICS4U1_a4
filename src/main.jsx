import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Heron from "./HeronCalc.jsx";
import Ambiguous from "./AmbiguousCalc.jsx";
import Newton from "./NewtonsCalc.jsx";
import Polynomial from "./PolynomialFunc.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <div className="row">
        <div className="column">
          <Heron />
        </div>
        <div className="column">
          <Ambiguous />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <Newton />
        </div>
        <div className="column">
          <Polynomial />
        </div>
      </div>
    </div>
  </StrictMode>
);
