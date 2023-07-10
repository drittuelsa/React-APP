
import { useDispatch, useSelector } from "react-redux";
import { GetName } from "./sample2Redux/action2";


export const ReduxSample =()=>{
  
    const dispatch = useDispatch();

    const Name = useSelector((state)=>{
        return state.Name
    })
    
   return(
    <div>
        {Name}
        <input type="text" name ={Name} onChange={(e)=>dispatch(GetName(e.target.value))}/>
    </div>
   )
}