import React from 'react';
import IntroScreen from './IntroScreen';

const Layout = ({ children, classname = "", showIntro = true }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${classname}`}>
      {showIntro && (
        <div >
          
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;