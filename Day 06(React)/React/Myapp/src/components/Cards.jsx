import React from 'react'
import "./Card.css"

const Cards = (props) => {
  return (
    <div className='card'>
        <img src="https://www.bosshunting.com.au/wp-content/uploads/2022/05/Best-Forearm-Exercises.jpeg" alt="" width={333} style={{overflow : "hidden"}}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>Read More</button>
    </div>
  )
}

export default Cards
