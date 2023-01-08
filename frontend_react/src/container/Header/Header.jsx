import React from 'react'
import { motion } from 'framer-motion';

import{ AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const  Header = () => {
  // console.log("pageTop");
  return (
    <div>
      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div>
              <h1 className="head-text">Jonathan Feng</h1>
              <p className="p-text">Welcome to My Portfolio</p>
              
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrap (Header, 'home', "app__header app__flex");