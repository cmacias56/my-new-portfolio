
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../Stylesheets/Contact.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import { Modal } from 'repopup';

  
const Contact = () => {
  const form = useRef();
  
  const sendEmail= (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_jhj8y0c',
      'template_d1p27xc', 
      e.target, 
      'bpvslfMg_hLozvNXp')
    .then((result) => {
      console.log(result.text);
      console.log("message sent")
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
      <input type="text" name="user_name" className="name-input"/>
      <label>Email</label>
      <input type="email" name="user_email" className="email-input"/>
      <label>Message</label>
      <textarea name="message" className="message-input"/>
      {/* <button onClick={() => setOpen(true)} type="submit" value="Send" className="button-send">Send</button>  */}
      <Popup trigger={<button type="submit" value="Send" className="button-send">Send</button>} position="top right">  <div>Messesage sent successfully!!</div>
  </Popup> 
    </div>
    </form>
    </div>
    
    )
}

export default Contact