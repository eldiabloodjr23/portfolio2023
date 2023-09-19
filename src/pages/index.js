import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import heroimg from "../../public/images/profile/house.png";
import Link from "next/link";
import { LinkArrow, SunIcon } from "@/components/Icons";
import IntroScreen from "../components/IntroScreen";
import { BigHead } from '@bigheads/core'
import HeroText from "@/components/HeroText";
import LoadingLine from "@/components/LoadingLine";


export default function Home() {
  return (
    <>
      <Head>
        <title>Kamil Portfolio</title>
        <meta name="description" content="generated" />
      </Head>

      <main className="flex items-center text-dark w-full pt-32">
        <Layout classname="pt-0 ">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <div className="relative w-[85%] h-auto ml-15   ">
              <div className=" animate-bounce-slow">
  <BigHead
    accessory="roundGlasses"
    body="chest"
    circleColor="blue"
    clothing="shirt"
    clothingColor="black"
    eyebrows="leftLowered"
    eyes="normal"
    faceMask={false}
    faceMaskColor="black"
    facialHair="mediumBeard"
    graphic="react"
    hair="none"
    hairColor="black"
    hat="beanie"
    hatColor="blue"
    lashes={false}
    lipColor="green"
    mask
    mouth="serious"
    skinTone="brown"
    size="small"
  />
</div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center whitespace-break-spaces">
              <AnimatedText
                text="Turning Vision Into Reality           With Code And Design."
                className="!text-5xl !text-left whitespace-break-spaces"
              />
              <p className="my-4 text-base font-medium">
                As a <span className="text-cyan-500 white">full-stack developer</span>
                , I love transforming ideas into innovative web applications.  I&rsquo;m your go-to partner for creating digital experiences that
                stand out in todays fast-paced online landscape.
              </p>
              <div className="flex items-center self-start mt-2 justify-between">
                <Link
                  class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring mr-6"
                  href="/mycv.pdf"
                  target="_blank"
                >
                  <span class="absolute inset-0 border border-cyan-400 group-active:border-cyan-500"></span>
                  <span class=" border border-cyan-400 bg-sky-400 px-12 py-3 transition-transform active:border-cyan-500 active:bg-cyan-500 group-hover:-translate-x-1 group-hover:-translate-y-1 flex items-center">
                    Resume
                    <SunIcon className="w-5 ml-1" />
                  </span>
                </Link>
                <a
                  class="group relative inline-block text-sm font-medium text-cyan-600 focus:outline-none focus:ring active:text-cyan-500"
                  href="contact"
                >
                  <span class="absolute inset-0 border border-current"></span>
                  
                  <span class="flex border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 items-center ">
                    Contact <LinkArrow className="w-5 ml-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <HeroText/>
         <LoadingLine/>
         
          
        </Layout>
      </main>
    </>
  );
}
