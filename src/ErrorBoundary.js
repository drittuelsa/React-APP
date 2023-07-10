import React from "react";

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError : false};
    }

    static getDerivedStateFromError(error){
        //update state so the next render will show the fallback UI

        return{hasError : true};
    }

    // componentDidCatch(error, errorInfo){
    //     //in console it already gives error msg with componentDidCatch()
    //     console.log(error);
    //     console.log(errorInfo);
    // }

    render(){
        if(this.state.hasError){
        return <h1>Something went wrong</h1>
        }

        return this.props.children;
    }
}