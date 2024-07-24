import {useState} from 'react';
function Input() {
    const [review,setReview] = useState('');
    const [displayReview,setDisplay]=useState('')
    //const [push,setPush]=useState
   
    const Add=()=>{
        console.log("review added");
        setDisplay(review);
    }
    const Value=(event)=>{
        console.log("changed the input");
        console.log(event.target.value);
        setReview(event.target.value);
    }
    return(
        <>
        <input type="text" placeholder="enter the review"  onChange={Value}/><br></br>
        
        <button onClick={Add}>Add review</button>
        <h3>{displayReview}</h3>
        </>
    )
}
export default Input;