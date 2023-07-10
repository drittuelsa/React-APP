import React from "react";
import { ReactDOM } from "react";


function App(){
 
    return (
        <div className="App">
            Hello World
           <br/>
           Hello World
           <br/>
           5 * 10 is {5*10}
           <br/>
            {
              (a) ? (a) : "Null value"
            }
        
        </div>
    )
}

export default App;

2nd App.JS

import React from "react";
// import { ReactDOM } from "react";
import './style.css';

import Header from './Header';
import Header1 from './Header1';

function App(){
 
  var name = "Drittu";
 
    return (
        <div className="App">
            This is my 1st page
         <Header/>
         <Header1 Myname = {name}/>     
        </div>
    )
}

export default App;


// import React, { useState } from "react";
// import MyFirstFC from "./MyFirstFC";
// import PropsInFC from "./PropsInFC"
// import Table from "./Table";
// import Passwordset from "./Passwordset";
// import MySecndFC from "./MySecndFC";

// import Page1 from "./Page1";
// import { Provider } from "react";
// import ProviderValue from "./UserContext";
//  import Assignment from "./Assignment";
// import { StoreDefault } from './sample2Redux/store2';
// import { ReduxSample } from './sampleRedux';
// import ToggleComp from "./ToggleComp";//same,but here "function ToggleComp()" is given in ToggleComp.js
// import { ToggleComp } from "./ToggleComp";//here "export const ToggleComp =() => {" is given in ToggleComp.js
// import PureComp from "./PureComp";

// import { Provider } from "react-redux";

// import { ReduxFC } from "./ReduxFC";
// import { DefaultStore } from "./components/store";

// import { DefaultStore1 } from "./assignment/store1";
// import { ReduxTable } from "./ReduxTable";

// import { ReduxCounter } from "./ReduxCounter";
// import { CounterStore } from "./counter/counterStore";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Enquiry } from "./Enquiry";
// import { AboutUs } from "./AboutUs";
// import { Home } from "./Home";
// import { Electronics } from "./Electronics";
// import { Mobile } from "./Mobile";
// import { Television } from "./TV";
// import ErrorBoundary from "./ErrorBoundary";
// import CounterClick from "./CounterClick";
// import HoverClick from "./HoverClick";

// import {Update } from "./Edit";
// import { UseMemo } from "./useMemo";
// import { UseCallBack } from "./useCallback";
// import SampleClass from "./sampleClass1";
// import Header3 from "./Header4";
// import { useState } from "react";
// import Header1 from "./sample/1Header";

// import State from "./State";

function App(){
 
    // var Emp = {
    //   Name : "Drittu" ,
    //   Midname : "Elsa",
    //   Lastname : "Sebastian"
    // }
   
  
    // const [Pwd,setPwd] = useState("ABC")
    
    // var changePassword =(e)=>{
    //   setPwd(e.target.value)
    // }
  
    return(
      <div>
        <Provider store ={StoreData}>
        <Home/>
        </Provider>
       
        {/* <Header1/> */}
        {/* <MyFirstFC/> */}
        {/* <MySecndFC/> */}
        {/* <PropsInFC/> */}
        {/* <Passwordset Password={Pwd} PWDFunctn = {changePassword}/>  */}
        {/* <Table/> */}
        {/* <ProviderValue value ={Emp}>
        <Page1/>
        </ProviderValue> */}
        {/* <State/> */}
        {/* <ToggleComp/> */}
        {/* <Assignment/> */}
        {/* <PureComp/> */}
  
    {/* <Provider store = {StoreDefault}> */}
    {/* <Provider store = {DefaultStore}> */}
      {/*   <ReduxSample/> */}
     
    {/* </Provider> */}
        {/* <Provider store = {DefaultStore1}>  */}
        {/* <ReduxFC/>  */}
        {/* <ReduxCounter/> */}
        {/* <BrowserRouter> 
        <Routes>
        <Route path="/" element={<ReduxTable/>}></Route>
        <Route path="/Edit/:id"  element={<Update/>}></Route>
        </Routes>
      </BrowserRouter> 
         </Provider>     */}
    
        {/* <UseMemo/> */}
        {/* <UseCallBack/> */}
        {/* <BrowserRouter> 
        <Routes>
          <Route path = "/" element ={<Home/>}></Route>
          <Route path = "/Enq" element = {<Enquiry/>}></Route>
          <Route path = "/AboutUs/:Name" element = {<AboutUs/>}></Route> 
          <Route path="/Electronics" element ={<Electronics/>}></Route>
          <Route path="/Electronics/Mobile/:Name" element ={<Mobile/>}></Route>
          <Route path="/Electronics/TV" element ={<Television/>}></Route> 
        </Routes>
        </BrowserRouter>  */}
         
         {/* <ErrorBoundary>
          <Error />
         </ErrorBoundary> */}
    
        {/* <CounterClick/>
        <HoverClick/> */}
         
         {/* <SampleClass/> */}
        
      </div>
    );
  }
  
  
  
  export default App;
      
  
  // import React from "react";
  
  // import Header3 from "./Header3";
  
  // function App(){
  
  //   return(
  //     <div className="App">
  //       <h2>welcome</h2>
  //       <Header3/>
  //     </div>
  
  //   )
  // }
  // import Country from "./Country";
  
  // function App(){
  
  //   return(
  //     <div className="App">
  //       <h2>Choose the Country</h2>
  //       <Country/>
  //     </div>
  
  //   )
  // }
  
  
  // export default App;
  