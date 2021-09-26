import { useState } from "react";

export default function Calc() {
  const [result, setresult] = useState("");
  const handleClick = (e) => {
    if (result === "Error") {
      setresult("");
      setresult(e.target.name);
    } else {
      setresult(result.concat(e.target.name));
    }
  };
  const calculate = () => {
    try {
      setresult(eval(result).toString());
    } catch (err) {
      setresult("Error");
    }
  };
  const clear = () => {
    setresult("");
  };
  const backspace = () => {
    setresult(result.slice(0, -1));
  };
  return (
    <section className="calc-section">
      <form>
        <input readOnly type="text" value={result} />
      </form>
      <div className="keypad">
        <button name="" className="highlight" id="clear" onClick={clear}>
          Clear
        </button>
        <button
          name=""
          id="backspace"
          className="highlight"
          onClick={backspace}
        >
          C
        </button>
        <button name="/" className="highlight" onClick={handleClick}>
          /
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="+" className="highlight" onClick={handleClick}>
          +
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="-" className="highlight" onClick={handleClick}>
          -
        </button>

        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="*" className="highlight" onClick={handleClick}>
          *
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>

        <button name="." onClick={handleClick}>
          .
        </button>
        <button id="result" className="highlight" onClick={calculate}>
          =
        </button>
      </div>
    </section>
  );
}
