import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  const updateCalc = (e) => {
    // e.preventDefault();
    setResult(result.concat(e.target.value));
  };

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setResult(eval(result).toString());
  };
  const deleleClear = () => {
    setResult("");
  };

  return (
    <main>
      <div className="main-calculator">
        <div className="container-calculator">
          <form action="" className="calculator" name="calc">
            <input
              className="value"
              type="text"
              placeholder="0"
              value={result}
              readOnly="readonly"
            />

            <span className="num clear">
              <input type="button" value="C" onClick={deleleClear} />
            </span>
            <span className="num">
              <input type="button" value="/" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="*" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="7" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="8" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="9" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="-" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="4" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="5" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="6" onClick={updateCalc} />
            </span>
            <span className="num plus">
              <input type="button" value="+" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="1" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="2" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="3" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="0" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="00" onClick={updateCalc} />
            </span>
            <span className="num">
              <input type="button" value="." onClick={updateCalc} />
            </span>

            <span className="num equal">
              <input type="button" value="=" onClick={calculate} />
            </span>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
