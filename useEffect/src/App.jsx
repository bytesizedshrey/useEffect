import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setcounter] = useState(0);
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);

  useEffect(
    function () {
      console.log("use effect is running");
    },
    [],
  );

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setcounter(counter + 1)}>Increase</button>
      
      <h1>{number}</h1>
      <button onClick={()=>{
        setNumber(Math.floor(Math.random()*10))
      }}>Increase</button>

      <h1>{number1}</h1>
      <button onClick={()=>{
        setNumber1(Math.floor(Math.random()*10))
      }}>Increase This One</button>
    </div>

  
  );
};

export default App;
