import { useEffect,useState } from "react";
function Fetching(){
    const [data, setData]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts ')
        console.log(res.ok);
        const resData= await res.json();
        setData(resData);
        console.log(resData);
        }
        fetchData();
    })
    return(
        <>
        <div>
           
        </div>
        </>
    );
}
export default Fetching;