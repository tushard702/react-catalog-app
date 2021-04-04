import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <div className='container'>
      <div className='intro'>
        <h1>Contact Us</h1>
        <p>Swing by for a cup of coffee, or leave us a message:</p>
      </div>
      <div className="row">
        <div className="column">
          <img alt='get in touch' src="/images/contact-us.png" />
        </div>
        <div className="column">
          <h2 className='contact-heading'>You can write to us <i class="fas fa-pencil-alt"></i></h2>
          <form action="mailto:someone@example.com" method="post">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            <label htmlFor="subject">Message</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Submit" />
          </form>
          <br />
          <h2 className='contact-heading'>Our contact details <i class="fas fa-comments"></i></h2> 
          <div className="contact">
            <p className='contact-item'><i class="fas fa-phone-alt" /> +91-99112-82558</p>
            <p className='contact-item'><i class="fas fa-envelope-open-text" /> mehamiatextiles@gmail.com</p>
            <p className='contact-item'><i class="fas fa-map-marked-alt" /> 194, Bhera Enclave, Paschim Vihar, New Delhi-110087</p>
          </div>
        </div>
      </div>
    </div>
  );
}
