import logo from "./logo.svg";
import "./App.css";
import ButtonCal from "./Component/ButtonCal";
import { useState } from "react";
function App() {
  const [result, setresult] = useState("");

  const reset = () => {
    setresult("");
  };

  const addToCurrent = (e) => {
    if (e === "=") {
      setresult(eval(result));
    } else {
      setresult(result + e);
    }
  };

  const button = [
    { sysblom: "AC", col: "5", action: reset },
    { sysblom: "/", col: "6", action: addToCurrent },
    { sysblom: "*", col: "6", action: addToCurrent },
    { sysblom: "7", col: "1", action: addToCurrent },
    { sysblom: "8", col: "1", action: addToCurrent },
    { sysblom: "9", col: "1", action: addToCurrent },
    { sysblom: "-", col: "6", action: addToCurrent },
    { sysblom: "4", col: "1", action: addToCurrent },
    { sysblom: "5", col: "1", action: addToCurrent },
    { sysblom: "6", col: "1", action: addToCurrent },
    { sysblom: "+", col: "6", action: addToCurrent },
    { sysblom: "1", col: "1", action: addToCurrent },
    { sysblom: "2", col: "1", action: addToCurrent },
    { sysblom: "3", col: "1", action: addToCurrent },
    { sysblom: "=", col: "4", action: addToCurrent },
    { sysblom: "0", col: "7", action: addToCurrent },
    { sysblom: ".", col: "8", action: addToCurrent },
  ];

  return (
    <div className="App">
      <div className="cal-name">Calculator</div>
      <input className="input" value={result} type="text"></input>
      <br />
      {button.map((b, i) => {
        return (
          <ButtonCal
            key={i}
            sysblom={b.sysblom}
            col={b.col}
            action={(e) => b.action(e)}
          ></ButtonCal>
        );
      })}
    </div>
  );
}

export default App;
