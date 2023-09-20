import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../public/images/projects/bevyproject.png'
import project2 from "../../public/images/svgs/lms.png"

import {motion} from "framer-motion";


const FeaturedProject = ({ type, title, summary, img, link, link2 }) => {
  const imageVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    initial: {
      scale: 1,
      boxShadow: 'none',
    },
  };

  const buttonVariants = {
    hover: {
      y: -2, 
      scale: 1.05, 
    },
    initial: {
      y: 0,
      scale: 1,
    },
  };

  return (
    <article className='p-12 w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl hover:bg-sky-100 transition duration-500 ease-in-out'>
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <motion.div
          whileHover='hover'
          initial='initial'
          variants={imageVariants}
          className='w-full h-auto rounded-lg overflow-hidden'
        >
          <Image src={img} alt={title} className='w-full h-auto'
           priority
           sizes="(max-width: 768pxpx) 100vw,
           (max-width : 1200px) 50vw"
          />
        </motion.div>
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-cyan-700 font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'> {title}</h2>
        </Link>
        <div className='my-2 font-medium text-black'>{summary}</div>
        <div className='mt-2 flex items-center'>
          <motion.a
            className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
            href={link}
            target='_blank'
            whileHover='hover'
            initial='initial'
            variants={buttonVariants}
          >
            Visit Project
          </motion.a>
          <div className='mx-3'></div>
          <motion.a
            className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
            href={link2}
            target='_blank'
            whileHover='hover'
            initial='initial'
            variants={buttonVariants}
          >
            Read Article
          </motion.a>
        </div>
      </div>
    </article>
  );
};




const Project = ({ title, type, img, link, github }) => {
  const imageVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    initial: {
      scale: 1,
      boxShadow: 'none',
    },
  };

  const buttonVariants = {
    hover: {
      y: -2, 
      scale: 1.05, 
    },
    initial: {
      y: 0,
      scale: 1,
    },
  };

  return (
    <article className='w-full flex items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative hover:bg-sky-200 transition duration-500 ease-in-out'>
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <motion.div
          whileHover='hover'
          initial='initial'
          variants={imageVariants}
          className='w-full h-auto rounded-lg overflow-hidden'
        >
          <Image src={img} alt={title} className='w-full h-auto' 
           priority
           sizes="(max-width: 768pxpx) 100vw,
           (max-width : 1200px) 50vw"
          />
        </motion.div>
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-cyan-700 font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        <div className='mt-2 flex items-center justify-between w-full'>
          <motion.a
            className='text-lg font-semibold underline'
            href={link}
            target='_blank'
            whileHover='hover'
            initial='initial'
            variants={buttonVariants}
          >
            Visit
          </motion.a>
          <motion.a
            className='w-8'
            href={github}
            target='_blank'
            whileHover='hover'
            initial='initial'
            variants={buttonVariants}
          >
            <GithubIcon />
          </motion.a>
        </div>
      </div>
    </article>
  );
};



const Projects = () => {
  return (
    <>
     <Head>
        <title>Kamil | Projects</title>
        <meta name="description" content="escription" />
      </Head>

      <main className='w-full mb-16 flex-col items-center justify-center'>
        <Layout classname='pt-32'>
        <AnimatedText  text="Explore Latest Projects" className="mb-20 capitalize" />

       <div className='grid grid-cols-12 gap-24 '>
        <div className='col-span-12'>
          <FeaturedProject
          title="Bevy"
          summary="In this successfully completed project, we designed and developed the Bevy Logistics Web App, a multifunctional platform that serves as a hub for  clients and prospective couriers. The Web App offers a seamless and intuitive experience for users on both sides of our logistics operations."
          link="https://bevy.city/"
          type="Featured Project"
          img={project1}
          link2="https://forbes.cz/spojil-je-rohlik-ted-ho-nasleduji-rozvazkovy-startup-chce-obsadit-nemecko/"
         
          
          
          />
        </div>
        <div className='col-span-6'>
            <Project
            title="Kurzora"
        
            link="https://bevy.city/"
            type="LMS System"
            img={project2}
            />
        </div>
        <div className='col-span-6'>
        <Project
            title="Bevy city"
            summary="In this successfully completed project, we designed and developed the Bevy Logistics Web App, a multifunctional platform that serves as a hub for  clients and prospective couriers. The Web App offers a seamless and intuitive experience for users on both sides of our logistics operations."
            link="https://bevy.city/"
            type="Featured Project"
            img={project1}
            
            />
        </div>
        <div className='col-span-12'>
        <FeaturedProject
          title="Bevy"
          summary="In this successfully completed project, we designed and developed the Bevy Logistics Web App, a multifunctional platform that serves as a hub for  clients and prospective couriers. The Web App offers a seamless and intuitive experience for users on both sides of our logistics operations."
          link="https://bevy.city/"
          type="Featured Project"
          img={project1}
         
          
          
          />
        </div>
        <div className='col-span-6'>
        <Project
            title="Bevy city"
            summary="In this successfully completed project, we designed and developed the Bevy Logistics Web App, a multifunctional platform that serves as a hub for  clients and prospective couriers. The Web App offers a seamless and intuitive experience for users on both sides of our logistics operations."
            link="https://bevy.city/"
            type="Featured Project"
            img={project1}
            />
        </div>
        <div className='col-span-6'>
        <Project
            title="Bevy city"
            summary="In this successfully completed project, we designed and developed the Bevy Logistics Web App, a multifunctional platform that serves as a hub for  clients and prospective couriers. The Web App offers a seamless and intuitive experience for users on both sides of our logistics operations."
            link="https://bevy.city/"
            type="Featured Project"
            img={project1}
            />
        </div>

       </div>

        </Layout>
      </main>

    </>
  )
}

export default Projects