import React, { useState } from "react";
import "./Styles/LogReg.css"
import Login from './Component/Login';
import Register from './Component/Register';

const Enter =() =>{
    const [vue , setVue] = useState(<Register/>)
    return (
        <div className="Enter">
            {vue}
            <div className="Choose"> 
                <button onClick={()=>setVue(<Login/>)} className="LoginRegBut">Login</button>
                <button onClick={()=>setVue(<Register/>)} className="LoginRegBut">Register</button> 
            </div>
        </div>
    )
}
export default Enter;