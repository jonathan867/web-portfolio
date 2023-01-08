import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    console.log(idName);
    return (
    <div id={idName} className={`app__container ${classNames}`}> 
        {/* allows you to provide classNames dynamically with template strings*/}
      <SocialMedia />
      <div className="app__wrapper app__flex"> 
        <Component />
        {/* this takes a component, and wraps in with social media and navdots */}

      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;