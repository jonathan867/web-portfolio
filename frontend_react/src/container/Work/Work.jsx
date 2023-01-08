import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);

  // sorts the projects by the order property
  works.sort((a, b) => (a.order > b.order ? 1 : -1));
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => { // pulls data from sanity database
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      //setFilterWork(data);
    });
  }, []);

  return (
    <div>
      <h2 className="head-text">Projects</h2>
      {/* the list of projects */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {/* eye icon */}
                {work.projectLink !== "None" && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
                {/* github icon */}
                {work.codeLink !== "None" && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>
            {/* info */}
            <div className="app__work-content app__flex">
              <h2 className="bold-text">{work.title}</h2>
              <h5 className="app__lang-text">
                Language: <span>{work.languages}</span>
                {work.devTools !== "None" && (
                  <React.Fragment>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dev Tools: <span>{work.devTools}</span>
                  </React.Fragment>
                )}
              </h5>

              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'projects',
  "app__primarybg"
)