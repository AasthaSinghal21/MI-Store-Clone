import React from 'react'
import VideoCard from './VideoCard.js';
import '../styles/Videos.css';

const Videos = ({Videos}) => {
  return (
    <div className='Videos'>
      {Videos.map((item,index)=>(
         <VideoCard index={index} name={item.name} key={item.image} image={item.image}/>
      ))}
    </div>
  )
}

export default Videos
