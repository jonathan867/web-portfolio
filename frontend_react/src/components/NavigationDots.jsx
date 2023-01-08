import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'projects', 'about', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index} 
        // gives a unique index to each item
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : { }}
      />
    ))}
  </div>
);

export default NavigationDots