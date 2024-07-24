import { useState } from "react";
import Form from "./form";
import Register from "./Register";
function Connection(){
    const [loggedIn,setLoggedIn]=useState(false);
    const [reg,setReg]=useState(false);
    const handleLogin=()=>{
        setLoggedIn(true);
        console.log("succes login")
    }
    const handleReg=()=>{
        setReg(true);
        console.log('registered');
    }

    return(
        <>
        <div>
        {loggedIn===false&&reg===false?
            <div>
                <button type='text' onClick={handleLogin}>Login</button>
                <button type="text" onClick={handleReg}>Register</button>
            </div>
            :loggedIn?<Form/>:<Register/>
        }
        </div>
        
        </>
    )
}
export default Connection;