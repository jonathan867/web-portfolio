import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
//import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://linkedin.com/in/jonathanfeng'>
       <BsLinkedin />
      </a>
    </div>
    <div>
    <a href='https://github.com/jonathan867'>
       <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia