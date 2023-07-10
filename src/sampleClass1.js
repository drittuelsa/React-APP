import React from "react";
import CountrySearch from "./CountrySearch";

export default class SampleClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            Country : ['India', 'Indonasia', 'West Indies', 'Pakistan', 'Persia', 'UK', 'USA']
        };         
    }  
    

    render(){
        return(
            <div> 
            <CountrySearch CountryList = {this.state.Country}/>
            </div>
           

        )
    
    }
}