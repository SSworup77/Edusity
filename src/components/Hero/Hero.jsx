import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui saepe quam aut, 
          architecto minus nemo repellat laudantium reiciendis. Eius recusandae repellendus enim nam
           deserunt inventore voluptatibus suscipit fugit totam quam.</p>

        <button className='btn'>Learn More <img src={dark_arrow} alt="" /></button>

      </div>
    </div>
  )
}

export default Hero