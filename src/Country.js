import React from "react";
import Search from "./Search";

export default class Country extends React.Component{
    // Country : ['India', 'West Indies', 'Indonesia','Pakistan','Ireland','UK', 'USA'];
    constructor(props){
        super(props);
        this.state ={
            Country : ['India', 'West Indies', 'Indonesia','Pakistan','Ireland','UK', 'USA','Polland'],
           
        };     
//console.log(this.state.Country)
    }
   
    render(){
       
        return(
            <div>
                <Search CountryList = {this.state.Country}/> 
                {/* {this.state.Country.map((item)=> (
                <div>{item}</div>
                ))} */}
            </div>
        )
    }
}