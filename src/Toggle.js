import { useState } from "react";
import React from "react";

export default function Toggle(){

    const[show, setShow] = useState(true);

    var handleClick =()=> {
        setShow(!show)
    }

    return(
        <div>
            {
                show &&  <div>
                            Toggle me
                         </div>
            }

            <input type="button" value="Toggle" onClick={handleClick}/>

           
        </div>
    )
}