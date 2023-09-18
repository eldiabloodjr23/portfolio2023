import React, {useEffect, useState} from 'react'
import {motion, useAnimation} from 'framer-motion'


const Footer = () => {
  return (
    <>
    
    <div >
      
    <footer className="bg-white">
    <LoadingLine duration={3000} /> {/* Specify the duration in milliseconds */}
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              Let&rsquo;s Connect
            </h2>

            <span className="text-cyan-700 text-3xl">♡</span>
        

            <p className="mx-auto mt-4 max-w-sm text-gray-500 whitespace-break-spaces">
              Ready to join forces and make it happen.
            </p>

            <a
              className="group relative inline-block text-sm font-medium text-cyan-600 focus:outline-none focus:ring active:text-cyan-00 mt-5"
              href="/download"
            >
              <span className="absolute inset-0 border border-current"></span>
              <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                Hire me
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Footer






const LoadingLine = () => {
  return (
    <motion.div
      className="h-1 bg-cyan-600 w-full rounded-full"
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
      transition={{
        duration: 3, // Adjust the duration as needed
        repeat: Infinity, // Repeat the animation infinitely
        
      }}
    ></motion.div>
  );
};