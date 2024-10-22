"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    tagLine: "An Extensive Movie Database Platform.",
    title: "MOOOVIES: MERN-Driven Movie Insights Powered by TMDb API",
    stack: [
      "React.js",
      "Node.js",
      "Material UI",
      "Express.js",
      "MongoDB",
      "TheMovieDB API",
      "Vercel",
    ],
    image: "/assets/work/thumb1.png",
    live: "https://mooovies-six.vercel.app/",
    github: "https://github.com/PranayD1807/mooovies-MERN",
    description:
      "Developed an application hosted on Vercel that delivers detailed movie information, including ratings, cast details, and plot summaries for over 5,000+ movies.",
  },
  {
    num: "02",
    tagLine: "Professional Consultation & One-on-One Sessions Platform",
    title: "Tawx: Talk to Influencers & Experts",
    stack: [
      "Flutter",
      "Firebase",
      "MongoDB",
      "AWS",
      "Agora",
      "Node.js",
      "Express.js",
      "GCP",
      "FCM",
      "Cloud Run functions",
    ],
    image: "/assets/work/thumb2.png",
    live: "https://onelink.to/q3zst5",
    description:
      "Designed the backend, frontend, and system architecture for the Tawx app. Launched with over 2,000 downloads in 2 weeks, enabling professional communication and one-on-one sessions with influencers and experts for advice, tips, and tricks.",
  },
  {
    num: "03",
    tagLine: "Mental Health Support App",
    title: "Ivyy: Real-Time Mental Health Support",
    stack: ["Flutter", "Firebase", "REST API", "LLM Model"],
    image: "/assets/work/thumb3.png",
    description:
      "Worked with one other developer to create and launch an app that connects users with real-world psychiatrists through live chat for interactive conversations, attracting over 200 users.",
  },
  {
    num: "04",
    tagLine: "Online Car Rental Service.",
    title: "Gear UP: MERN-Powered Car Rentals with CarQuery",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CarQuery API",
      "CDN API",
    ],
    image: "/assets/work/thumb1.png",
    live: "https://gear-up-frontend.vercel.app/",
    github: "https://github.com/Gear-Up-Rentals/Gear-Up",
    description:
      "Implemented the service with a team of 3, integrating CarQuery for extensive vehicle data and CDN for image hosting.",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent text-outline"
                style={{ WebkitTextStroke: "1px white" }}
              >
                {project.num}
              </div>
              {/* project title */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60 ">
                {project.tagLine}
                <br />
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-l text-accent">
                      {item}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live button */}
                {project.live?.trim() && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* Github button */}
                {project.github?.trim() && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[529px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
