import React from "react";

function Passwordset(props){

    return(
        <div>
            Change Password <br/>
            <input type="text" onChange={props.PWDFunctn}/>
            {props.Password}
        </div>
    );
}
 
export default Passwordset
