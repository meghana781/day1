function Array(){
    const fruits=['apple', 'mango'];
    const a=fruits.map((item,index) => <li key={index}>{item}</li>);
    return(
        <>
            <h2>Array</h2>
            <ul>{a}</ul>
            
        </>
        
    );
}
export default Array;