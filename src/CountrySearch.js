import React from "react";


export default class CountrySearch extends React.Component{
constructor(props){
    super(props);
    this.state ={
        Country : this.props.CountryList
    }
}

handleChange =(e)=>{
    var str = e.target.value;
    var resultantArray = this.props.CountryList.filter((elem) =>  elem.toLowerCase().includes(str.toLowerCase()));
    //debugger;//It shows result till the above line
    this.setState({
        Country : resultantArray
    })

}
    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange}/>
                {this.state.Country.map(item =>( 
                <div> {item}</div>))}
            </div>
        )
    }
}