import React from "react"


export const withHOC = (OldComponent) =>{ //HOC is a component which takes another component as input ---here OldComponent is the input
  //create NewComponent
   class NewComponent extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            Counter :0    
        }
    }

    handleClick =()=>{
        this.setState({
            Counter : this.state.Counter + 1
        }) 
    }
    render(){
        return(
            <div>
                <OldComponent Counter={this.state.Counter} handleClick={this.handleClick}></OldComponent>
            </div>
        )
    }
   }

    return NewComponent //-----returns a newcomponent.....NewComponent is the oldcomponent with additional functionality
}