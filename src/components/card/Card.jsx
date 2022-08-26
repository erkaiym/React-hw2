import React from 'react'
import './Card.css'
import Lakers from '../images/lakers24.png'
import Line from '../images/line.svg'

function Card() {
  return (
    <>
    <div className='main-photo'>
        <div className='photo-card'>
        <img className='yellow-photo' src={Lakers} alt="" />
        <p className='LeBron'>LeBron James Lakers City Edition </p>
        <p className='Nike'>Nike NBA Swingman Jersey</p>
        <p className='price'>$290</p>
        </div>

        <div className='photo-card'>
        <img className='yellow-photo' src={Lakers} alt="" />
        <p className='LeBron'>LeBron James Lakers City Edition </p>
        <p className='Nike'>Nike NBA Swingman Jersey</p>
        <p className='price'>$290</p>
        </div>

        <div className='photo-card'>
        <img className='yellow-photo' src={Lakers} alt="" />
        <p className='LeBron'>LeBron James Lakers City Edition </p>
        <p className='Nike'>Nike NBA Swingman Jersey</p>
        <p className='price'>$290</p>
        </div>

        

    </div>
    </>
  )
}

export default Card