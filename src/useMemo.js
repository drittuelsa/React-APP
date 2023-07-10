import React, {useMemo, useState} from 'react';

  
export const UseMemo =()=> {
  const [number, setNumber] = useState(0)
//   const squaredNum =  squareNum(number);-----before using useMemo, re-rendering of squaring occurs evenif we are not using it.
  const [counter, setCounter] = useState(0);
  
 // Change the state to the input
  const handleChange = (e) => {
    setNumber(e.target.value);
  }

   // Using useMemo
   const squaredNum = useMemo(()=> {
    return squareNum(number);
  }, [number])
    
  // Increases the counter by 1
  const handleClick= () => {
    setCounter(counter + 1);
  }
  return (
    <div>

      <input type="number" value={number} onChange={handleChange}></input>
          
      <div>SQUARED OUTPUT: {squaredNum}</div>
      
      <button onClick= {handleClick}>Increment</button>
      <div>Counter : {counter}</div>


    </div>
  );
}
  
// function to square the value
function squareNum(number){
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}
  
