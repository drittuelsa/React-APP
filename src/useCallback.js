import React, { useState, useCallback } from 'react'

const funtncount = new Set();

export const UseCallBack = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
 
//   const incrementCounter = () => {
//     setCount(count + 1)
//   }
//   const decrementCounter = () => {
//     setCount(count - 1)
//   }
   
//    const incrementNumber = () => {
//     setNumber(number + 1)
//   }

  const incrementCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrementCounter = useCallback(() => {
    setCount(count - 1)
  }, [count])
  const incrementNumber = useCallback(() => {
    setNumber(number + 1)
  }, [number])
   
  funtncount.add(incrementCounter);
  funtncount.add(decrementCounter);
  funtncount.add(incrementNumber);
alert(funtncount.size);
 
  return (
    <div>
      Count: {count}
      <button onClick={incrementCounter}>
        Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrease Counter
      </button>
      <button onClick={incrementNumber}>
        increase number
      </button>
    </div>
  )
}
 
