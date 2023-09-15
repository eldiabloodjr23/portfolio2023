import React from 'react';

const Layout = ({ children, classname = "", showIntro = true }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${classname}`}>
      {showIntro && (
        <div className="intro-overlay">
          {/* Render your IntroScreen component here */}
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;