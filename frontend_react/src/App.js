import React from 'react';

import{About, Footer, Header, Skills, Work} from './container';
import{Navbar} from './components';
import './App.scss'; //fonts

const App = () => {
  return (
    // title page, projects, about, contact
    <div className="app">
        <Navbar />
        <Header /> 
        <Work />
        <About />
        <Footer />
        <Skills /> 
        {/* skills is used as a footer */}
    </div>
  );
}

export default App;