import {useState, useEffect } from "react"


function MySecndFC(){

    const [info,setInfo]= useState({ 
        Name : "DRITTU",
        Age : "0"
       
    })


    var handleChange = (e) =>{
        setInfo ({...info,                    
        [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        console.log("I am in useEffect")
        //replaces componentDidMount method
        //Best method to use API call
    },[])

    useEffect(()=>{
        console.log("I am in useEffect without secondary parameter or dependancy function")
        //render method
    })

    useEffect(()=>{
        console.log("Name changed")
        //replaces componentDidUpdate method
    },[info.Name])// useEffect works only when depandancy function used, here when we type name only, not age

    useEffect(()=>{
        return()=>{
            console.log("when component is unmounting, so it dosent work here")//to clear memory, or to remove some events
        }
        // replaces componentDidUnmount method
    })

    return(
        <div>
            Name : <input type ="text" name="Name" onChange={handleChange}/>
            {info.Name}<br/>

            Age : <input type ="text" name="Age" onChange={handleChange}/>
            {info.Age}
        </div>
    )
}

export default MySecndFC