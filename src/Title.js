import React from "react";


export default class Title extends React.Component{

    constructor(props){
     super(props)
    const  countryArray = [];
        this.state ={
            Name : ""
        }
       
        console.log(this.state);
    }

    componentDidMount(){
        countryArray : [{"country":"India"},
        {"country":"West Indies"},{"country":"SriLanka"}, {"country":"Indonesia"}, {"country":"America"}
    ] 
    }
    handleSearch = (e)=>{
        this.setState({Name: e.target.value})
       
    }
    // // (e.target.value = country)?
    // componentDidUpdate(){
    //     (e.target.value = country)? (this.props.countryArray.country);//try with console.log
    // }
     

    render(){
    
        return(
            <div>
                <input type = "text" onChange={this.handleSearch}/>
                <ul>            
                {this.state.countryArray.map((item) => <List countryArray = {item} />)}           
            </ul>  
            </div>
        )
    }
}

class List extends React.Component {  
    render() {  
       return (  
          <ul>            
             <li>{this.props.countryArray.country}</li>   
          </ul>  
       );  
    }  
 }  
