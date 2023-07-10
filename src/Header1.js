import React from "react";
// import Header from './Header2'


export default class Header1 extends React.Component{

    constructor(props){
        super(props)
        this.state={
            Name:"Name"
        }
    }

    handleChange =(e)=>{
        this.setState({
            Name:e.target.value
        })
    }
    render(){
        return(
            <div>
               <label>TYPE</label>
                <input type="text" onChange={this.handleChange} />
                {this.state.Name}

                {/* <Header/> */}
            </div>
        )
    }
}