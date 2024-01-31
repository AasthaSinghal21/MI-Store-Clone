import React from 'react'
import NavCard from './NavCard.js'
import '../styles/NavOptions.css'

const NavOptions = ({miPhones, redmiPhones, tv, laptop, audio, fitnessAndLifestyl, home, accessories}) => {
 
  return (
    <div className='navOptions'>
      {miPhones? miPhones.map((item, index)=>(
        <NavCard name = {item.name} price ={item.price} image = {item.image} key = {item.image} index = {index}/>
      )) : null}

      {redmiPhones? redmiPhones.map((item, index)=>(
        <NavCard name = {item.name} price ={item.price} image = {item.image} key = {item.image} index = {index}/>
      )) : null}

      {tv? tv.map((item, index)=>(
        <NavCard name = {item.name} price ={item.price} image = {item.image} key = {item.image} index = {index}/>
      )) : null}

      {laptop? laptop.map((item, index)=>(
        <NavCard name = {item.name} price ={item.price} image = {item.image} key = {item.image} index = {index}/>
      )) : null}

      {fitnessAndLifestyl? fitnessAndLifestyl.map((item, index)=>(
        <NavCard name = {item.name} price ={item.price} image = {item.image} key = {item.image} index = {index}/>
      )) : null}

      {home? home.map((item, index)=>(
        <NavCard name = {item.name} price ={item.price} image = {item.image} key = {item.image} index = {index}/>
      )) : null}

      {audio? audio.map((item, index)=>(
        <NavCard name = {item.name} price ={item.price} image = {item.image} key = {item.image} index = {index}/>
      )) : null}

      {accessories? accessories.map((item, index)=>(
        <NavCard name = {item.name} price ={item.price} image = {item.image} key = {item.image} index = {index}/>
      )) : null}
    </div>
  )
}

export default NavOptions
