import React, { useState } from 'react';

function Card() {
    const array=[1,2,3,4,5,6,7];
    
    const [count,setCount]=useState(0);

    const [reviews, setReviews] = useState([
    {
      name: 'Reviewer1',
      review: 'This product is good.',
    },
    {
      name: 'Reviewer2',
      review: 'This product is not great.',
    },
  ]);

  const [newReview, setNewReview] = useState('');

  const handleReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const addReview = () => {
    if (newReview.trim() !== '') {
      setReviews([
        ...reviews,
        {
          name:'Reviewer3',
          review: newReview,
        },
      ]);
      setNewReview('');
    }
  };
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
     
  return (
    <div>
      <h1>Product Name</h1>
     <div style={{display:'flex',padding:'10px'}}>
        <div>
        <img src="/human.jpeg" alt="Product" />
        </div>
        <div>
        <h2>Product Name</h2>
        <p>
          Description
        </p><br></br>
        <h5>₹500.00</h5>
        <div>
        {(count===0) ?
        <button style={{backgroundColor:'black',color:'white'}} onClick={click}> add to cart
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
    </div>
      <div>
        <h2>Product specifications</h2>
        <p>
          Description Description 
        </p>
      </div>
      <div>
        <h2>Reviews</h2>
        <input type='text' value={newReview} onChange={handleReviewChange} />
        <button style={{backgroundColor:'black',color:'white'}} onClick={addReview}>Add review</button>
        <div>
          {reviews.map((review) => (
            <li key={review.review}>
              <b>{review.name}</b>: {review.review}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;