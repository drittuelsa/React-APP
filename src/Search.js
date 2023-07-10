import React from "react";

export default class Search extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            Country : this.props.CountryList
        }
        // console.log(this.props.CountryList)
        
    }

    handleSelect = (e)=>{
        var str = e.target.value;  
       // console.log(e.target.value)
       //var resultantArray = this.state.Country.filter((elem) => elem = elem.includes(str));If we write this.state.Country,it selects the required element
       //but doesnt returns initial array. to remove this , use this.props.CountryList
       //var resultantArray = this.props.CountryList.filter((elem) => elem = elem.includes(str));but this is case-sensitive
       var resultantArray = this.props.CountryList.filter(elem=> elem = elem.toLowerCase().includes(str.toLowerCase()))
    //    match and includes gives same result. toUpperCase also make the text case insensitive
// console.log(resultantArray)
this.setState({Country : resultantArray})
     }

        // console.log(this.props.CountryList)
        // console.log(this.state.Name)
    render(){
        return(
            <div>
                <input type="text" onChange={this.handleSelect}/>
                <ul>
                {this.state.Country.map((item)=> (
                <div key={item}>{item}</div>
                ))}
                </ul>
               
            </div>
        )
    }
}
