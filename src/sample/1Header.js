import React, {  useState } from "react";



export default function Header1() {

  const [show,setShow] = useState(false);

  const[data, setData] = useState({
    Id:" ",
    Name :" ",
    Email :" ",
    City : " "
  });

  const[products,setProducts] = useState([]);

  var handleChange =(e)=>{
    setData({...data,
    [e.target.name]: e.target.value})
   
  }
 
  var handleClickAdd =() => {
    setShow(!show)
}

  var handleSave =()=>{
    const product = {
      // id : (new Date).getTime(),
      Id : data.Id,
      Name : data.Name,
      Email : data.Email,
      City : data.City,
  };
 const saveProduct = [...products, product];
     console.log(saveproduct);
     setProducts(saveProduct);
  }
  
 var handleClickDelete =(e)=>{
//alert(e.target.name)
  // id : (new Date).getTime(),
var value = products.filter(itemlist => itemlist.Id != e.target.name);
setProducts(value) ;
console.log(value);
 }

    return(
        <div>    

<div id="table">
            <table >
                <tr>
                  <th>ID</th>
                    <th>NAME</th>
                    <th>Email ID</th>
                    <th>CITY</th>
                </tr>
                {console.log(products)}
                 {products.map((item) => ( 
                <tr> 
                  {/* <td className="pl-3">{index+1}</td> */}
                  <td>{item.Id}</td>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.City}</td>
                    <td><input type="button" value="delete" name={item.Id} onClick={handleClickDelete}/> </td>
               </tr>   
               ))}  
              </table> 

            <input id="Add" className="button" type="button" value="ADD"  onClick={handleClickAdd} /><br/>      
        </div>
     
        {
              (show) &&          <div>
              <fieldset id="container">
              <label>ID</label>
              <input type="number" name ="Id" onChange={handleChange}/><br/>
              <label>Name</label>
              <input type="text" name="Name" onChange={handleChange} /><br/> 
              <label>Email</label>
              <input type="email" name="Email" onChange={handleChange} /><br/>
              <label>City</label>
              <input type="text" name="City" onChange={handleChange} /><br/>
              <br/>
              <input type="button" value="Save" onClick={handleSave}/>
              </fieldset>
            </div>
          }
        </div>
      
    )
  }


 
