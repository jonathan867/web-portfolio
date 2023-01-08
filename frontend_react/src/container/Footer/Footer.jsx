import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  // states for form input
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  // structuring formdata
  const { username, email, message } = formData;

  const handleChangeInput = (e) => { // like eventlistener
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //creates an object 
  };

  const handleSubmit = () => { 
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact) // using sanity to input a message
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true); // changes state
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Contacts</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:jonathanfeng5@gmail.com" className="p-text">jonathanfeng5@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (416) 825-4210" className="p-text">+1 (416) 825-4210</a>
        </div>
      </div>

      {/* <h2> Leave a message. I'd love to chat with you!</h2> */}

      {/* start of form
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Leave a Message :)"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div> */}
          {/* changes the text of the button based on state*/}
          {/* <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Message sent. Thank you for getting in touch!
          </h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);