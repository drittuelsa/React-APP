import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetName } from "./components/action";
import { useEffect } from "react";
import { GetUsers } from "./components/action";


export const ReduxFC =() =>{

    const Name = useSelector((state) => {
        return state.Name
    })

    const Users = useSelector((state)=>{
        return state.Users
        
    }) 


    const dispatch = useDispatch()//initialising dispatch . returns a reference to the dispatch function from the Redux store.
                      //use it to dispatch actions as needed. we dispatch it by calling dispatch passing in the return value from the action creator.
                            
        
 useEffect(() => {
    dispatch(GetUsers(Users))
}, [])

    return(
        <div>
            My REDUX functional component<br/>
            {Name}
            <input type ="text" onChange = {(e) =>dispatch(GetName(e.target.value))} /> <br/><br/>

            {console.log(Users)}
            <table>
            {Users.map((item,i)=> (  
                    <tr key={i}>
                        <td>[{item.id}{item.name},{item.username},{item.email}]</td>   
                    </tr> 
            ))}
           </table>
        </div>
    )
}