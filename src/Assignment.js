import React, { useState } from "react";

function Assignment(){

    const [show,setShow] = useState(false);
  
    const [data,setData]= useState({
    Id:" ",
    Name:" ",
    Email :" ",
    City :" "});

    const [products, setProducts] = useState([]);


// var handleClickSave = () =>{
//             setShow(true)}

    var handleClickAdd =(e) => {
        setShow(!show)
    }

    var handleChange =(e) => {   
       
        setData ({...data,                 
             [e.target.name] : e.target.value
            });
          
    }

//     const saveProduct =
//     product =>{setProducts([...products, product]) ;
//     console.log(product)    
// };

// var handleClickSave = (e) =>{saveProduct({
//     id: (new Date).getTime(),data
// })
// setProducts('')//erases in console

// // setData('');//erases output on table and erases in console

// ;}
var handleClickSave = (e) =>{
  
    const product = {
      //  id : (new Date).getTime(),
        Id : data.Id,
        Name : data.Name,
        Email : data.Email,
        City : data.City,
    };
     const saveProduct = [...products, product];
     console.log(product);
     setProducts(saveProduct);  
}

var handleClickDelete =(e)=>{

    // alert(e.target.name)
    const value = products.filter(item => item.Id != e.target.name);
    setProducts(value);
    console.log(value)
}
    return(
<div>
       <div id="table">
            <table>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>Email ID</th>
                    <th>CITY</th>
                </tr>
                {console.log(products)}
                 {products.map((item) => ( 
                <tr> 
                    {/* <td className="pl-3">{index+1}</td> to get automatic numbering*/}
                    <td>{item.Id}</td>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.City}</td>
                    <td><input type ="button" value ="Delete" name={item.Id} onClick={handleClickDelete}/> </td>
               </tr>   
               ))}  
              </table> 

            <input id="Add" className="button" type="button" value="ADD" onClick={handleClickAdd} /><br/>

            
        </div>
        {
            (show) && <div id="container">
                        <label>ID: </label>
                        <input type="number" name="Id"  onChange={handleChange} /><br/>
                        <label>NAME : </label>
                        <input type="text" name="Name"  onChange={handleChange} /><br/>
                        <label>Email ID: </label>
                        <input type="text" name="Email" onChange={handleChange} /><br/>
                        <label>City : </label>
                        <input type="text" name="City" onChange={handleChange} /><br/>

                        <input id="Save" className="button" type="button" value="SAVE"  onClick={handleClickSave}/><br/>
                    </div>   
        }
         
</div>          

    )
}

export default Assignment