import React from 'react';

import MainPage from '../common/MainPage';
import About from '../common/About';
import Experience from '../common/Experience';
import Contact from '../common/Contact';

function AppHome() {
    return(
        <div className="main">
            <MainPage />
            <About />
            <Experience />
            <Contact />
        </div>
    );
}

export default AppHome;