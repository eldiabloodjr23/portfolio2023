
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic1 from "../../public/images/profile/developer-pic-1.png";
import profilePic2 from "../../public/images/profile/developer-pic-2.png";
import profilePic3 from "../../public/images/profile/developer-pic-3.png";
import house from "../../public/images/profile/house.png"
import Image from "next/image";
import {  useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";





const AnimatedNumbers = ({value}) => {

const ref = useRef(null)
const motionValue = useMotionValue[0];
const springValue = useSpring(motionValue, {duration: 3000})
const isInView = useInView({ref});

useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    console.log(latest)
  })
})




    return <span ref={ref}></span>  
}














const About = () => {
  const [currentImage, setCurrentImage] = useState(profilePic1);
  const imageArray = [profilePic1, house, profilePic3];
  const transitionInterval = 3000; // 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = imageArray.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % imageArray.length;
      setCurrentImage(imageArray[nextIndex]);
    }, transitionInterval);

    return () => clearInterval(interval);
  }, [currentImage]);

  const imageTransitionStyle = {
    transition: "opacity 1s ease-in-out",
    opacity: 1,
  };

  return (
    <>
      <Head>
        <title>Kamil | About</title>
        <meta name="description" content="escription" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose" className="mb-20" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-cyan-800 mt-5">
                Bio
              </h2>
              <div className="font-medium my-4">
  My name is Kamil, and I am a dedicated and enthusiastic
  <div>full-stack developer. With a strong passion for coding and</div>
  <div>problem-solving, I have embarked on a journey to create</div>
  <div>innovative and functional digital solutions.</div>
</div>
              <div className="font-medium my-3">
                In my career, I have honed my skills in both front-end and
                back-end development. On the front-end, I specialize in crafting
                user-friendly and visually appealing interfaces using modern web
                technologies like React, Next JS, and JavaScript. I enjoy the
                art of turning design concepts into interactive web experiences.
              </div>
             
              <div className="font-medium my-4">
                {" "}
                I also value collaboration and teamwork. Building great software
                is not a one-person job, and I enjoy working with
                cross-functional teams to bring ideas to life. Whether it s
                collaborating with designers, product managers, or fellow
                developers, I believe that diverse perspectives lead to the best
                outcomes.
              </div>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark"
              style={imageTransitionStyle}
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] "  />
              <Image
                src={currentImage}
                alt="kamil"
                className="w-full h-auto rounded-xl cursor-cell "
              />
            </div>
        
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center mb-6">
                <span className="inline-block text-4xl font-bold text-cyan-800"  >100%</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                 work effort | mindset ✔️
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center mb-10">
                <span className="inline-block text-4xl font-bold text-cyan-800" >40+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  project completed 🏆
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center mb-10">
                <span className="inline-block text-4xl font-bold text-cyan-800" >6+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  years of experience 📚
                </h2>
              </div>
            </div>
          </div>
         
          <div className="mb-10"></div>
          <Skills/>
          <Experience />
          <div>
        
          </div>
          
        </Layout>
      </main>
    </>
  );
};

export default About;
