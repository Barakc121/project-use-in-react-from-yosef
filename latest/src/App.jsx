import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import Count from "./components/count";
import Data from "./components/Data";
import Clean from "./components/clean";
import FullNameBuilder from "./components/input";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Hello />
      <Count />
      <Data />
      {toggle ? <Clean /> : null}
      <button onClick={()=>{setToggle(!toggle)}}>Remove / Show</button>
      <FullNameBuilder/>
    </>
  );
}

export default App;
