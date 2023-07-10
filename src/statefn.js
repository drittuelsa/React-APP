import React, { useState } from "react";


export default function Statefn(){

    var [data, setData] = useState({
        NAME : "Drittu",
        AGE : 50
    })

var handleChange =(e)=>{
    setData({...data,
        [e.target.name] : e.target.value
    })
}

    return(
        <div>
            <input type="text" name='NAME' onChange={handleChange}/>
            {data.NAME}

            <input type="text" name='AGE' onChange={handleChange}/>
            {data.AGE}
        </div>
    )
}