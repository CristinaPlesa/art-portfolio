import emailjs from 'emailjs-com';
import { useState } from 'react';
import Header from '../Header/Header.js';
import './contact.css';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e)=>{
    // e.preventDefault();
    emailjs.sendForm('service_ny028wi', 'template_v4qkllg', e.target, process.env.REACT_APP_API_KEY) //will work if we put the actual API key into the function we just need to figure out how to hide the API key in the .env and still use it.
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset();

    setMessage(true);
  }
  return (
    <div>
      <Header />
        <div className="contact" id="contact">
          <div className="left">
            <img src="Assets/Contact/Contact.jpg" className='contactImg' />
          </div>
          <div className="right">
            <h2>Contact.</h2>
            <form onSubmit={handleSubmit}>
              <input className="contactName" type="text" placeholder="Name" name="name"/>
              <input className="contactEmail" type="text" placeholder="Email" name="email"/>
              <textarea className="contactMessage" placeholder="Message" name="message"></textarea>
              <button className="contactButton" type="Submit">Send</button>
              {message && <span id="contactReply" >Thanks, I'll reply ASAP</span >}
            </form>
          </div> 
        </div>
    </div>
  )
}
