import React from "react";
import { Link} from "react-router-dom";



export const Electronics = () => {

   
return(
    <div>
        <Link to ="/"><input type="button" value="Home"/></Link>
        <h2>View Electronics items</h2>
        <Link to ="/Electronics/Mobile/:Name">Mobiles</Link><br/><br/>
        <Link to ="/Electronics/TV">TV</Link>
    

    </div>
)
}