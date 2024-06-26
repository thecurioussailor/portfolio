"use client"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import { useState } from "react";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    
    <div className={darkMode ? 'dark': ''}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-gray-200">
            <h1 className="text-xl font-burtons">WebCharm</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Ashutosh Sagar</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">Frontend Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
            <Image src={deved} layout="fill" objectFit="cover" alt="wave"/>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelancer, designer and developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for 
              <span className="text-teal-500"> startups </span>
              and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} width={100} height={100} alt="design"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p>Creating elegant designs suited for your needs
                 following core design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p>Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1"></p>
            </div>
            <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={consulting} width={100} height={100} alt="design"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p>Creating elegant designs suited for your needs
                 following core design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p>Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1"></p>
            </div>
            <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white ">
              <Image src={code} width={100} height={100} alt="design"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p>Creating elegant designs suited for your needs
                 following core design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p>Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1"></p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1 dark:text-gray-200">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelancer, designer and developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for 
              <span className="text-teal-500"> startups </span>
              and collaborated with talented people to create digital products for both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including programming and teaching.
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <div><Image className="rounded-lg object-cover" style={{width:'100%', height:'100%'}} layout="responsive" src={web1} alt="project-image"/></div>
            </div>
            <div className="basis-1/3 flex-1">
              <div><Image className="rounded-lg object-cover" style={{width:'100%', height:'100%'}} layout="responsive" src={web2} alt="project-image"/></div>
            </div>
            <div className="basis-1/3 flex-1">
              <div><Image className="rounded-lg object-cover" style={{width:'100%', height:'100%'}} layout="responsive" src={web3} alt="project-image"/></div>
            </div>
            <div className="basis-1/3 flex-1">
              <div><Image className="rounded-lg object-cover" style={{width:'100%', height:'100%'}} layout="responsive" src={web4} alt="project-image"/></div>
            </div>
            <div className="basis-1/3 flex-1">
              <div><Image className="rounded-lg object-cover" style={{width:'100%', height:'100%'}} layout="responsive" src={web5} alt="project-image"/></div>
            </div>
            <div className="basis-1/3 flex-1">
              <div><Image className="rounded-lg object-cover" style={{width:'100%', height:'100%'}} layout="responsive" src={web6} alt="project-image"/></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
