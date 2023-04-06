import "./App.css";
import { useState } from "react";
import shape from "./Shape.png";
import logo from "./Group.png";
import line from "./Rectangle.png";
function App() {
  let array = ["asfasf", "adfafdaf"];

  const arr = [
    "Take time to know yourself. ",
    "A narrow focus brings big results.",
    "Show up fully. Don't dwell on the past, and don't daydream about the future, but concentrate on showing up fully in the present moment.",
    "Don't make assumptions. If you don't know the situation fully, you can't offer an informed opinion.",
    "Be patient and persistent. Life is not so much what you accomplish as what you overcome. ",
    "Luck comes from hard work. Luck happens when hard work and timing and talent intersect.",
    "Be your best at all times. You never know what the future will bring, so always make the best use of the present.",
    "Don't try to impress everyone. The unhappiest people are those who care the most about what other people think.",
    "Don't be afraid of being afraid. Sometimes the one thing you need for growth is the one thing you are most afraid to do.",
    "Listen to learn. Learn how to listen. You can't learn anything when you're talking.",
    "Listen to learn. Learn how to listen. You can't learn anything when you're talking.",
    "You can't always get what you want. But, as the song says, if you try you may find you get what you need.",
  ];
  const [randomAdvice, setRandomAdvice] = useState("Advice");

  const randomArrItem = () => {
    const value = Math.floor(Math.random() * arr.length);
    setRandomAdvice(arr[value]);
    console.log(value);
  };
  return (
    <div className="container">
      <div className="head">Get </div>
      <div className="adviceContainer">
        <p>{randomAdvice}</p>
      </div>
      <div className="lineLogo">
        <div className="leftLine">
          <img src={line} alt="" />
        </div>
        <img className="logo" src={logo} />
        <div className="rightLine">
          <img src={line} alt="" />
        </div>
      </div>
      <div className="button" onClick={randomArrItem}>
        <img src={shape} />
      </div>
    </div>
  );
}

export default App;
