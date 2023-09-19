import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion'; // Import useScroll from framer-motion
import Lilcon from './Lilcon';
import Footer from './Footer';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <div ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between mt'>
      <Lilcon reference={ref} />
      < motion.div className='mt-20'
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type:"spring"}}
    
      
      
      >
        <h3 className='capitalize font-bold text-2xl text-cyan-900 '>
          {position}&nbsp; <a className='text-cyan-600 capitalize cursor-pointer' href={companyLink}>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-cyan-800 '>
          {time}  {address}
        </span>
        <div className='font-medium w-full pt-3'>
          {work}
        </div>
      </motion.div>
    </div>
  );
}

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], 
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Experience</h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
        style={{scaleY:scrollYProgress}}
        
        
        
          className='absolute left-9 top-1 w-[4px] h-full bg-cyan-900 origin-top' />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <div>
            <Details
              position="Full Stack Developer"
              time="January 2022 - Present"
              companyLink="https://bevy.city/"
              company="Bevy"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            />
            <Details
              position="Full Stack Developer"
              time="January 2022 - August 2023"
              companyLink="https://bevy.city/"
              company="Creatidea"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            />
            <Details
              position="Front End Developer"
              time="January 2022 - August 2023"
             
              company="Freelancer"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            />
            <Details
              position="Full Stack Developer"
              time="January 2022 - August 2023"
              companyLink="https://bevy.city/"
              company="Bevy"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            />
            {/* Add more Details components as needed */}
            <Lilcon/>
          </div>
        </ul>
      </div>
      
    </div>
  )
}

export default Experience;