import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Form(){
    const firstRef = useRef(null); //reference
    const passRef=useRef(null);
    useEffect(()=>{
        passRef.current.focus();
    })
    const formSubmitted=(event)=>{
        event.preventDefault(); //prevent reload
        
        console.log(firstRef.current.value);
        console.log(passRef.current.value);
        
        if(firstRef.current.value!=='' &&  passRef.current.value!==''){
            console.log("Successfully logged in")
        }
        else{
            console.log("Enter the details properly");
        } 
            
    }
    
    
    return(
        <>
            <div>
                <form style={{textAlign:'center'}} onSubmit={formSubmitted}>
                    <h2>Login</h2>
                    
                    <input type='email' placeholder='Enter email' ref={firstRef} /><br></br>
                    <input type='password' placeholder='password' ref={passRef} /><br></br>
                    <button type='submit' >Submit</button>
                </form>
                
                <button type="text" onClick={() => window.history.back()}>Back</button>
            </div>
        </>
    )
}
export default Form;