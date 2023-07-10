import { useEffect, useState } from "react";



function Table(){    
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json))
    },[])

    // const handleDelete = (e)=>{
    //   setData(data-1)
    // }
    // function handleDelete(id){
    //     // alert(id)
    // fetch('https://jsonplaceholder.typicode.com/users', {
    // method: 'DELETE'
    // })
    //     .then(response => response.json())
    //     .then(json => setData(json))

    // };

    var handleDelete =(e)=>{
    //    console.log(e.target.name)//[1,2,3...10]
        //  alert(e.target.name);
        var Data = data.filter(itemlist=>itemlist.id != e.target.name)
       setData(Data)
        console.log(Data)
        // const Data = data.slice();
        // Data.splice(e.target.name-1,1);
        // setData(Data)
        // console.log(setData)

        }


    return(
    <div>
                 {/* {data.map((item,i)=> (    */}
                {/* <div key={i}>{item.name}</div>))}  */}
                 
                  <table id="details">
                    <tr >
                        <th>ID</th>
                        <th>Details</th>
                    </tr>
                {data.map((item,i)=> (  
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>[{item.name},{item.username},{item.email}]</td>
                        <td><input type="button" name = {item.id} value = "Delete" onClick ={handleDelete}/></td>
                        {/* <button type="button" onClick={()=>handleDelete(item.id)}>Delete</button>     */}
                    </tr> 
                     ))}   

                 </table>                                    
    </div>
    )
}

export default Table

 // setEntry([entrylist]);
        //         entrylist.push(data);
        //         setData(""); 