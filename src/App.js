import "./App.css";
import { useState } from "react";
import shape from "./Shape.png";
import logo from "./Group.png";
import line from "./Rectangle.png";
function App() {
let array = ['asfasf','adfafdaf']

  const arr = [
    "Take time to know yourself. ",
    "A narrow focus brings big results.",
    "Show up fully. Don't dwell on the past, and don't daydream about the future, but concentrate on showing up fully in the present moment.",
    "Don't make assumptions. If you don't know the situation fully, you can't offer an informed opinion.",
  ];
  const [randomAdvice, setRandomAdvice] = useState("Advice");
  

  const randomArrItem = () => {
    const value = Math.floor(Math.random() * arr.length);
    setRandomAdvice(arr[value]);
    console.log(value)
  };
  return (
    <div className="container">
      <div className="head">Get </div>
      <div className="adviceContainer">
      <p>{randomAdvice}</p>
      </div>
      <div className="lineLogo">
        <div className="leftLine">
          <img src={line} />
        </div>
        <img className="logo" src={logo} />
        <div className="rightLine">
          <img src={line} />
        </div>
      </div>
      <div className="button" onClick={randomArrItem}>
        <img src={shape} />
      </div>
    </div>
  );
}

export default App;
