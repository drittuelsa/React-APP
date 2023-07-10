import React, { useState } from "react";

export default function State(){

   var [data,setData] = useState({
    Name : "Drittu",
    Age : "0"
 }
   )

   var handleChange =(e)=>{
    setData({...data,
       [e.target.name] : e.target.value
    })}

    return(
        <div>
        <input type = "text" name ="Name" onChange={handleChange}/>
        {data.Name}

        <input type = "text" name ="Age" onChange={handleChange}/>
        {data.Age}
        </div>
    )
}