

function Details(){
    const a=['name1','name2','name3'];
    return( 
        <>
        <h2>Name:Meghana</h2>
        <h3>Branch:IT</h3>
        <h3>3rd</h3>
        <h4>SVECW</h4>
        <div>
            <ul>{
                a.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>
        </div>
        
        </>
        
     );   
}
export default Details