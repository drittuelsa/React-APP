import React, { useState } from "react";

function MyFirstFC(){

    // const [Name , setName] = useState("DRITTU");//'Name' is the current state and 'setName' is the function that updates state. useState is initialised 
//Here "DRITTU" is the default value
    const [info,setInfo]= useState({ //when we give object 
        Name : "",
        Age : "0",
        Gender :""
    })

//    var handleChange = (e) =>{
//         setName(e.target.value);//Function used to update the state
//    }

var handleChange = (e) =>{
    setInfo ({...info,//...info, is written to copy the data, otherwise it replaces dosent overwrite                     
    [e.target.name] : e.target.value//  Name : e.target.value //replce Name by [e.target.name]
    })
}
// var handleChange1 = (e) =>{
//     setInfo ({...info,
//      Age : e.target.value
//     })
// }
 

    return(
        <div>
            My First Functional Component<br/>
            Name: <input type = "text" name = "Name" onChange={handleChange}/>{/* to avoid multiple handleChange funtns, we use name ="" */}
            {info.Name}<br/>

            {/* <input type = "text" onChange ={handleChange1}/> to avoid multiple handleChange funtns, we use name ="" in every e.target, ie,input text
            {info.Age} */}

            Age: <input type = "text" name = "Age" onChange={handleChange}/>
            {info.Age}<br/>

            Gender: <input type = "text" name = "Gender" onChange={handleChange}/>
            {info.Gender}
        </div>
    )
}
export default MyFirstFC