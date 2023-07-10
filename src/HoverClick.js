import React from "react";
import { withHOC } from "./withHOC";

class HoverClick extends React.Component{

    render(){
        return(
            <div onMouseOver={this.props.handleClick}>
              {/* since we passed counter and handleclick in withHOC as this.state.counter and this.state.handleClick, make "state" to "props" in
               HoverClick and CounterClick*/}
               <h3> {this.props.Counter} Hover Over Me</h3> 
            </div>
        )
    } 
}

export default withHOC(HoverClick)