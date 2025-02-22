import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import arrow_icon from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9f07150f-ed38-472a-ab01-c5c67dca4313");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log("Success",data)
        setResult("Your message has been sent successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequatur qui, sed aspernatur unde deserunt illum quasi quia, quam eligendi et possimus quos! Facilis facere ipsa tempore quibusdam nisi necessitatibus?</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@sworup.com</li>
                <li><img src={phone_icon} alt="" />+977 987263781</li>
                <li><img src={loc_icon} alt="" />Swoymanbhu, Kathmandu,Nepal</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message"  rows="6" placeholder='Write your message here' required/>
                <button type="submit" className='btn dark-btn'>Submit now <img src={arrow_icon} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact