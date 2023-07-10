import React from "react";


export default class Header3 extends React.Component{

    constructor(props){//constructor is called only ONCE in life cycle
        super(props)
        this.state ={
            Name : ""
        }
        console.log("I am in constructor2");
    }

    componentDidMount(){//Only called ONCE, so best method to call API is DidMount method. Called after render method
        console.log("I am in component Did Mount2");
    }

    componentDidUpdate(){//2nd best method to call API. Whenever setstate is updated, 
        console.log("I am in Did Update2");
    }

    shouldComponentUpdate(){
        console.log("I am in should component update2");
        return true;
    }
    handleChange = (e)=>{
        // console.log(e)//this shows the event is a synthetic event
        this.setState({
             Name : e.target.value//here name should be same as the value typed inside the target(textbox)
           
        })
    }
    render(){ 
        console.log("I am in render2");

        return(
            <div>
                {this.state.Name}
               {/* 'this' displays the name written inside the text box outside also */}
                <input type = "text" name="text123" id="textname"  placeholder ="header4" onChange={this.handleChange}/>
            </div>
        )
    }
}