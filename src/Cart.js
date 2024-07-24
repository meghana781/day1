import { useState } from 'react';
function Cart(){
     //const count=10;
     const [count,setCount]=useState(0);
    
     const click=()=>{
        setCount(1);
    }
        const btnUpdateCount=()=>{
            setCount(count+1);
        }
        const btnDecrement=()=>{
            if(count>0){
            setCount(count-1);
            }
         }
     
    
     return(
        <>
        <div style={{display:'flex',border:'1px-solid black'}}>
         <div class='container' style={{height:'100px', width:'100px'}}>
         <img src="human.jpeg" alt="" style={{
            border:'10px solid', borderRadius:'100px', alignContent:'center',
        }}></img>
        <h1>product</h1>
        <p>Description</p>
        {(count===0) ?
        
        <button onClick={click}> add to cart
            </button>
        : <div style={{display:'flex'}}>
        <button  onClick={btnUpdateCount}>+
                </button>
                <h1>{count}</h1>
            <button onClick={btnDecrement}>-

                </button>
            </div>
    
        }
         </div>
        <div class='container'>
        <img src="human.jpeg" alt="" style={{
            border:'10px solid', borderRadius:'100px', alignContent:'center',
        }}></img>
        <h1>product</h1>
        <p>Description</p>
        {(count===0) ?
        
        <button onClick={click}> add to cart
            </button>
        : <div style={{display:'flex'}}>
        <button  onClick={btnUpdateCount}>+
                </button>
                <h1>{count}</h1>
            <button onClick={btnDecrement}>-

                </button>
            </div>
    
        }
        </div>
        </div>
        </>
     )
}
export default Cart;