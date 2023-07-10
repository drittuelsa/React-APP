import React from "react"
import { Link } from "react-router-dom"


export const Home =() =>{
    return(
        <div> 

        <h4>HOME PAGE</h4>
            <div>
               <Link to ="/Electronics">Electronics</Link>
               <li>Mobile</li>
               <li>TV</li>
               <Link>Fashion</Link><br/>
               <li>Men</li>
               <li>Women</li>
               <li>Kids</li>
               <Link>Home & Furniture</Link>
               <li>Kitchen, Cookware & Serveware</li>
               <li>Tableware & Dinnerware</li>
               <li>Home Decor</li>
               
            </div>
        </div>
    )
}