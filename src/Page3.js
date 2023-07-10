import React from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

function Page3(){

    var Details = useContext(UserContext)
    console.log(Details)
return(
    <>
    Third Component
    </>

)}
export default Page3