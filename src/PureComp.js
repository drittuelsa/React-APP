import React from "react"


export default class PureComp extends React.PureComponent{
    constructor(props){//constructor is called only ONCE in life cycle
        super(props)
        this.state ={
            Name : ""
        }
        console.log("I am in constructor");
    }

    handleChange = (e)=>{
        // console.log(e)//this shows the event is a synthetic event
        this.setState({
             Name : e.target.value//here name should be same as the value typed inside the target(textbox)
           
        })
    }

    render(){ 
        console.log("I am in render");

        return(
            <div>
                {/* {this.state.Name}// 'this' displays the name written inside the text box outside also */}
                <input type = "text" name="text123" id="textname"  onChange={this.handleChange}/>
                
            </div>
        )
    }

}
