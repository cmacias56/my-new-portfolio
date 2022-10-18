
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../Stylesheets/Contact.css';


const Contact = () => {
  const form = useRef();
  
  const sendEmail= (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_jhj8y0c', 'remplate_84wnz9q', e.target, 'bpvslfMg_hLozvNXp')
    .then((result) => {
      console.log(result.text)
    }, (error) => {
      console.log(error.text)
    })
    e.target.reset()
  };
  
  return (
    

    <div className="form-container" id="Contact">
    
    <h1 className="headline">Contact Me</h1>
    <p className="paragraph">Send me a direct email by filling out the form below!</p>

    <form id="form" onSubmit={sendEmail}>
    <div className="form-items">
      <label>Name</label>
      <input type="text" name="name" className="name-input"/>
      <label>Email</label>
      <input type="email" name="email" className="email-input"/>
      <label>Message</label>
      <textarea name="message" className="message-input"/>
      <button type="submit" value="Send" className="button-send">Send</button>
    </div>
    </form>
    </div>
    
    )
}

export default Contact