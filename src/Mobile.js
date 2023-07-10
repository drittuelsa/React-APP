import React, { useEffect } from "react"
import { useParams,Link } from "react-router-dom";



export const Mobile =() =>{

    const params = useParams()
    useEffect(() =>{
console.log(params)
    },[])

   
    return(
    
        <div>
             <Link to ="/"><input type="button" value="Home"/></Link>
             <Link to ="/Electronics"><input type="button" value="Electronics"/></Link>
            <h2>Mobiles</h2><br/>

            <div className="box">
            
           <div><img src={require("./images/samsung.jpg")} width={100} height={200}/> <h4>SAMSUNG Galaxy F13</h4></div> 
           <div><img src={require("./images/samsung2.jpg")} width={100} height={200}/><h4>SAMSUNG Galaxy F23 5G</h4></div> 
           <div><img src={require("./images/samsung2.jpg")} width={100} height={200}/><h4>SAMSUNG Galaxy A33</h4></div> 
           <div><img src={require("./images/samsung2.jpg")} width={100} height={200}/><h4>SAMSUNG Galaxy S21 FE 5G</h4></div>
            </div>
            <div className="box">
           <div><img src={require("./images/redmi1.jpg")} width={100} height={200}/><h4>REDMI 10A (Slate Grey, 32 GB)</h4></div>
           <div><img src={require("./images/redmi2.jpg")} width={100} height={200}/><h4>Redmi 9A Sport (Metallic Blue, 32 GB)</h4></div>
           <div><img src={require("./images/redmi3.jpg")} width={100} height={200}/><h4>REDMI Note 11T 5G (Aquamarine Blue, 128 GB)</h4></div>
           <div><img src={require("./images/redmi4.jpg")} width={100} height={200}/><h4>Redmi Note 11 PRO Plus 5G (Stealth Black, 256 GB)</h4></div>
            </div> 
            
        {
        (params.Name == "samsung") && 
            <div>
  
               <h2>Samsung Mobiles</h2> 
               <table>
               <tr>
                <th>MOBILE</th>
                <th>FEATURES</th>
            </tr>
                <tr>
                    <td>{<img src={require("./images/samsung.jpg")} width={100} height={100}/>}</td>
                    <td>SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)  (4 GB RAM)<br/>
                    Highlights
                        <li>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</li>
                        <li>16.76 cm (6.6 inch) Full HD+ Display</li>
                        <li>50MP + 5MP + 2MP | 8MP Front Camera</li>
                        <li>6000 mAh Lithium Ion Battery</li>
                        <li>Exynos 850 Processor</li></td>
                </tr>
                <tr>
                    <td>{<img src={require("./images/samsung2.jpg")} width={100} height={100}/>}</td>
                    <td>SAMSUNG Galaxy F23 5G (Aqua Blue, 128 GB)  (6 GB RAM)<br/>
                    Highlights
                        <li>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                        <li>16.76 cm (6.6 inch) Full HD+ Display</li>
                        <li>50MP + 8MP + 2MP | 8MP Front Camera</li>
                        <li>5000 mAh Lithium Ion Battery</li>
                        <li>Qualcomm Snapdragon 750G Processor</li></td>
                </tr>
                <tr>
                    <td>{<img src={require("./images/samsung3.jpg")} width={100} height={100}/>}</td>
                    <td>SAMSUNG Galaxy A33 (Awesome Peach, 128 GB)  (6 GB RAM)<br/>
                    Highlights
                        <li>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                        <li>16.26 cm (6.4 inch) Full HD+ Display</li>
                        <li>48MP + 8MP + 5MP + 2MP | 13MP Front Camera</li>
                        <li>5000 mAh Li-ion Battery</li>
                        <li>Exynos 1280 Processor</li></td>
                </tr>
                <tr>
                    <td>{<img src={require("./images/samsung4.jpg")} width={100} height={100}/>}</td>
                    <td>SAMSUNG Galaxy S21 FE 5G (Lavender, 128 GB)  (8 GB RAM)<br/>
                    Highlights
                    <li> 8 GB RAM | 128 GB ROM</li>
                    <li>16.26 cm (6.4 inch) Full HD+ Display</li>
                    <li>12MP + 12MP + 8MP (OIS) | 32MP Front Camera</li>
                    <li>4500 mAh Lithium-ion Battery</li></td>
                </tr>
                    
                
                </table>               
                    
               
                
            </div>
            }
            
{/* {(params.Mobiles == "MI") && 
            <div>
           MI Mobiles
       
            </div>}
              */}


        </div>
    )
}