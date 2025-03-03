import React, {useContext, useState } from "react";
import "../Styles/LogReg.css"
import { Context } from "..";

const Login =() =>{
    const {store} = useContext(Context);
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const log = () =>{
        store.Login(Username,Password)
        setTimeout(()=>{
            const Auth = JSON.parse(localStorage.getItem("MessageAuth"))
            if(Auth === true){
                window.location.reload();

            }else alert("Не вдалось!")
        },1000)
    }
    return (
        <div className='Login'>
            <h5 className="Her">Login</h5>
            <input className="Login-input" placeholder="Username.." onChange={(e)=> setUsername(e.target.value)}></input>
            <input className="Login-input" placeholder="Password.." onChange={(e)=> setPassword(e.target.value)}></input>
            <button className="LoginRegBut" onClick={()=>log()}>Login</button>
        </div>
    )
}
export default Login;