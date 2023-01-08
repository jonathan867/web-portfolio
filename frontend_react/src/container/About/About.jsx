import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import {images} from '../../constants';
import './About.scss';

const About = () => {
  return (
    <div className="app__about">
      <h2 className="head-text">About</h2>
      <div className="app__outerBox app__flex">
        <div className="app__headshot">
          <div className="app__box">
            <img src={images.headshot} alt="headshot" />
          </div>
        </div>
        <div className= "app__textBox"> 
          <h1 className="bold-text"> Hi! &nbsp;I'm Jonathan </h1>
          <p> I am currently a first year undergraduate student in Computer Engineering 
            at the University of Waterloo. I have a strong passion for software development, 
            and am always eager to learn new technologies and programming languages. In my free 
            time, you can find me coding new projects and experimenting with new baking recipes 
            in the kitchen. </p>
        </div>

      </div>
      
    </div>
  );
};


export default AppWrap (MotionWrap(About, 'app__about'), 'about', 'app__whitebg');