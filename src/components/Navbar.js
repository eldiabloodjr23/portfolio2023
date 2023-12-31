import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {GithubIcon, TwitterIcon, LinkArrow, MoonIcon, PinterestIcon, DribbbleIcon, LinkedInIcon}  from "./Icons";
import {motion} from 'framer-motion';
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease- duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};


const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between sticky top-0 bg-white z-10  ">
  <nav>
    <CustomLink href="/" title="Home" className="mr-4" />
    <CustomLink href="/about" title="About" className="mx-4" />
    <CustomLink href="/projects" title="Projects" className="mx-4"/>
    <CustomLink href="/contact" title="Contact" className="ml-4" />
  </nav>

  <nav className="flex items-center justify-center flex-wrap space-x-6">
   
   
    <a
                class="group relative inline-block text-sm font-medium text-cyan-600 focus:outline-none focus:ring active:text-cyan-00 mt-5 "
                href="contact"
              >
                <span class="absolute inset-0 border border-current"></span>
                <span class="  block border border-current bg-white px-10 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 ">
                  Hire 
                </span>
              </a >
              <motion.a href="https://twitter.com/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-4 pt-4 ">
      <GithubIcon/>
    </motion.a>
   
  </nav>

  <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
    <Logo />
  </div>
</header>
  );
};

export default Navbar;
