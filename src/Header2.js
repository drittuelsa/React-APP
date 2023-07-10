import React from "react";


export default class Header2 extends React.Component{
    handleChange = (e)=>{
        console.log(e.target.value);
    }
    render(){
        return(
            <div>
                <p>This is the 1st Paragraph</p>
                <input type = "text" name="text123" id="textname" onChange={this.handleChange}/>
            </div>
        )
    }
}