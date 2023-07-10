import React from "react";
import { withHOC } from "./withHOC";

class CounterClick extends React.Component{
    

    render(){
        return(
            <div>
               <h3>{this.props.Counter} </h3> 
                {/* since we passed counter and handleclick in withHOC as this.state.counter and this.state.handleClick, make "state" to "props" in
               HoverClick and CounterClick*/}
               <input type="button" value="Click Me"  onClick={this.props.handleClick}/>  
            </div>
        )
    }
}
export default withHOC(CounterClick)