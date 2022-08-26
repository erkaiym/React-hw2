import React from 'react'
import Card from '../card/Card'
import './Title.css'

function Title() {
  return (
    <>
    <div className='black-title'>
        <div className='black-title-content'>
        <div className='jersey'>Jerseys bestsellers</div>
        <div className='bestsellers'>bestsellers</div>
        <div className='collection'>Collection</div>
        <div className='nba-players'>The jerseys of the best nba players of the regular seasons.</div>
        </div>
        <Card />
    </div>
    </>
  )
}

export default Title