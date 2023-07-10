import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Increment } from "./counter/counterAction"
import { Decrement } from "./counter/counterAction"

export function ReduxCounter(){

    const counter = useSelector((state) => {return state.counter})

    const dispatch = useDispatch()

    return(
        <div>
            <h2>Counter component</h2>
            <h2>{counter}</h2>
            <button onClick={(e) =>(dispatch(Increment()))}>Increment</button>
            <button onClick={(e) =>(dispatch(Decrement()))} >Decrement</button>
           
           
        </div>
    )
}