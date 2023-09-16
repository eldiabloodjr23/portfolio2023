import React from 'react';
import { motion } from 'framer-motion';



const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-cyan-800
        cursor-pointer text-light  shadow-dark absolute py-3 px-6'
       whileHover={{scale:1.07}}
       initial={{x:0,y:0}}
       whileInView={{x:x, y:y}}
       transition={{duration:1.5}}
       viewport={{once:true}}
       >
       {name}
       </motion.div>
    )
}


const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center bg-circularLight rounded-full'>
      <motion.div
  className='flex items-center justify-center rounded-full font-semibold bg-cyan-800
    cursor-pointer text-light p-8 shadow-dark'
  whileHover={{ scale: 1.2 }}
  style={{ width: '100px', height: '100px' }} // Adjust the size as needed
>
  Web
</motion.div>
       <Skill name="Prisma" x="-15vw" y="14vw" />
       <Skill name="Next JS" x="-26vw" y="5vw" />
       <Skill name="React" x="-5vw" y="-10vw" />
       <Skill name="Node JS" x="-25vw" y="-7vw" />
       <Skill name="JavaScript" x="-10vw" y="2vw" />
       <Skill name="TypeScript" x="10vw" y="2vw" />
       <Skill name="Three JS" x="25vw" y="-5vw" />
       <Skill name="Python" x="20vw" y="8vw" />
       <Skill name="Mongo DB" x="15vw" y="-12vw" />
       <Skill name="Firebase" x="-20vw" y="-15vw" />
       <Skill name="Tailwind CSS " x="0vw" y="-20vw" />
       <Skill name="Django" x="2vw" y="15vw" />
      </div>
    </>
  );
};

export default Skills;
