function CardUI(props){
    
    return(
        <>
        <img src="human.jpeg" alt="" style={{
            border:'10px solid', borderRadius:'100px', alignContent:'center'
        }}></img>
        <div style={{alignContent:"center"}}>
        <h1>{props.u}</h1>
        <h2>{props.i}</h2>
        <h3>{props.k}</h3>
        </div>
        
        </>
    )
}
export default CardUI;