import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { GetName } from "./action";



export function ReduxFile(){

    const Name = useSelector((state) =>{
        return state.Name
    })

    const dispatch = useDispatch();

return(
    <div>
        <h2>Data</h2>
        <form>
        <label>Name : </label><br/>
        <input type="text" onChange = {(e)=> dispatch(GetName(e.target.value))}/>
        </form>
        {Name}
    </div>
)

}