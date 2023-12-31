import React from 'react'
import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react';


const LiIcon = ({reference}) => {


    const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"], 
  });
  return (
    <figure className='absolute left-0 stroke-cyan-800 '>
        <div className='-rotate-90'> 
        <svg  width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-1 fill-none  '/>
            < motion.circle style={{
                pathLength:scrollYProgress
            }}  cx="75" cy="50" r="20" className='  stroke-[5px] fill-light'/>

            <circle cx="75" cy="50" r="10" className=' stroke-primary stroke-1 fill-cyan-600 animate-pulse'/>
        </svg>
        </div>
    </figure>
  )
}

export default LiIcon