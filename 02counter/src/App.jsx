import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);
  //  let counter = 5
  const addvalue = () => {
    setCounter((prevCounter) => {
      if (prevCounter < 20) {
        return prevCounter + 1;
      }
      return prevCounter;
    });
  };

  const removeValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 0) {
        return prevCounter - 1;
      }
      return prevCounter;
    });
  };

  return (
    <>
      <h1> ekant with react </h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}
          
export default App;
