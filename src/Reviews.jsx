function Reviews(){
    const reviewer=[
        {
            name :'jyothi',
            feed :'good'
        },
        {
            name :'mytreyi',
            feed :'good'
        }
    ];
    

    return (
        <div style={{display:'flex'}}>
        <div ><img src="/pic.jpeg" alt="" height={50} width={50}></img>
        
        </div>
      
        <div>
        <div style={{listStyleType:'none'}}>{reviewer.map((item, index)=> (<p key={index}>{item.name}<br></br>{item.feed}</p>))}</div>
        </div>
        </div>
    );
}
export default Reviews;