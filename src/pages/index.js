import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import heroimg from "../../public/images/profile/heroimg.png";
import Link from "next/link";
import { LinkArrow, SunIcon } from "@/components/Icons";
import IntroScreen from "../components/IntroScreen";


export default function Home() {
  return (
    <>
      <Head>
        <title>Kamil Portfolio</title>
        <meta name="description" content="generated" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout classname="pt-0 ">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <div className="relative w-full h-auto ml-15  ">
                <Image
                  src={heroimg}
                  alt="heroimg"
                  width={700}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality  With Code And Design ."
                className="!text-5xl !text-left whitespace-pre-line"
              />
              <p className="my-4 text-base font-medium">
                As a <span className="text-red-500">full-stack developer</span>
                , I love transforming ideas into innovative web applications. I
                am your go-to partner for creating digital experiences that
                stand out in todays fast-paced online landscape.
              </p>
              <div className="flex items-center self-start mt-2 justify-between">
                <Link
                  class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring mr-6"
                  href="/mycv.pdf"
                  target="_blank"
                >
                  <span class="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                  <span class=" border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1 flex items-center">
                    Resume
                    <SunIcon className="w-5 ml-1" />
                  </span>
                </Link>
                <Link
                  class="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
                  href="/dummy.pdf"
                  target="_blank"
                >
                  <span class="absolute inset-0 border border-current"></span>
                  <span class="flex border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 items-center ">
                    Contact <LinkArrow className="w-5 ml-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          
          
        </Layout>
      </main>
    </>
  );
}
