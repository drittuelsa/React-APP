
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetData, GetJokes } from "./action";

export const Home =() =>{

    const data = useSelector((state) =>{
        return state.data
    })

    const jokes = useSelector((state) =>{
        return state.jokes
    })
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(GetData(data))
    },[])

    useEffect(() =>{
        dispatch(GetJokes(jokes))
    },[])

  
    //       var handleClick =(event)=>{
    //     const CategoryData = event.target.name;
    //     console.log(event.target.name);
    //     dispatch(GetJokes(CategoryData));
    // }
    //  const[jokess,setJokes] = useState();
    const [show,setShow] =useState(false)

    var handleClick =() => {
        setShow(!show)  
    }

    var changeJoke =() =>{
        dispatch(GetJokes(jokes))
    }
    
    var closeJoke =()=>{
        setShow(!show) 
    }

    return(
        <div>
        <div className="maindiv">
            <h1 id="floating" className="title">Chuck Norries</h1>
        <div className="content">
            
        
        {
                (show) &&  <div id="container1" >
                          <p>{jokes.value} </p> 
                          <input type="button" className="button" value="Next joke" onClick={changeJoke}/>
                          <input type="button" className="button" value="Close"  onClick={closeJoke}/>
                           </div> 
          }  
         
         
            {data.map((category) => (      
           <div  key={category} className="boxtype" value={category} onClick={handleClick}  >
            <div className="names">{category}</div> <br/> 
            <p className="word">Unlimited jokes on {category}</p>
           {/* <input type ="button" className="button" value="Click here" name={category} /> */}
           </div> 
        
            ))
            }
         </div> 
         </div>
        
         {/* {jokes && (
        <div>
          <h2>Joke:</h2>
          <p>{jokes}</p>
        </div>
      )} */}

        </div>
       
        
    ) 
}