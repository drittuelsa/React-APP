import React,{useState} from "react";

 export const ToggleComp =() => {

    const [show,setShow] =useState(true)

    var handleClick =() => {
        setShow(!show)
    }

    return(
        <div>
            {
                (show) &&  <div id = "ToggleDiv" >
                            Toggle me
                            </div>
            }

            <input type="button" value="Toggle Display" onClick={handleClick}/>
        </div>

        
    )
}
