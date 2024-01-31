import React from 'react'
import ProductreviewCard from './ProductreviewCard.js';
import '../styles/Productreviews.css';
const Productreviews = ({Productreviews}) => {
  return (
    <div className='Productreviews'>
     {Productreviews.map((item, index)=>(
        <ProductreviewCard price={item.price} name={item.name} review={item.review} image={item.image} key={item.image} index={item.index} />
     ))}
    </div>
  )
}

export default Productreviews
