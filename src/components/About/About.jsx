import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam distinctio
                 cupiditate culpa id adipisci. Error inventore, assumenda tempore labore facilis, 
                 doloremque id laudantium quas beatae optio quidem cupiditate. Explicabo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam distinctio
                    cupiditate culpa id adipisci. Error inventore, assumenda tempore labore facilis, 
                    doloremque id laudantium quas beatae optio quidem cupiditate. Explicabo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium 
                repudiandae ipsam maxime nisi ut repellat, distinctio perspiciatis soluta beatae eos.
                 Debitis dolore vitae ratione minima, dignissimos saepe velit labore.</p>
            
        </div>
    </div>
  )
}

export default About