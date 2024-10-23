"use client";

import { useState, useEffect } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAws,
  FaJava,
  FaDatabase,
  FaFigma,
  FaCode,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiDart,
  SiExpress,
  SiPostman,
  SiGithub,
  SiFilezilla,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiGooglecloud,
} from "react-icons/si";

// data
import aboutData from "@/data/about.json";
import education from "@/data/education.json";
import experience from "@/data/experience.json";

// about data
const about = {
  title: "About me",
  description: aboutData.description,
  info: [
    {
      fieldName: "Name",
      fieldValue: aboutData.name,
    },
    {
      fieldName: "Phone",
      fieldValue: aboutData.phone,
    },
    {
      fieldName: "Email",
      fieldValue: aboutData.email,
    },
    {
      fieldName: "Languages",
      fieldValue: aboutData.languages,
    },
    {
      fieldName: "Hobbies",
      fieldValue: aboutData.hobbies,
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Proficient in Flutter, Dart, React.js, Node.js, MongoDB, Firebase, and AWS. Strong knowledge of Data Structures, Algorithms, and system design, with experience in Figma, GitHub, and RESTful APIs.",
  skillList: [
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiFirebase />,
      name: "firestore",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
    {
      icon: <SiGooglecloud />,
      name: "google cloud platform (GCP)",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiFirebase />,
      name: "firebase cloud messaing",
    },
    {
      icon: <SiDart />,
      name: "dart",
    },

    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <SiMongoose />,
      name: "mongoose",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiPostman />,
      name: "postman",
    },
    {
      icon: <SiGithub />,
      name: "github",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiFilezilla />,
      name: "filezilla",
    },
    {
      icon: <FaCode />,
      name: "Datastructures and algorithms (DSA)",
    },
    {
      icon: <FaDatabase />,
      name: "Database managemet systems (DBMS)",
    },
    {
      icon: <FaCode />,
      name: "Object oriented programming (OOP)",
    },
    {
      icon: <FaCode />,
      name: "Operating Systems",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "react-toastify";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// api
import experienceApi from "@/api/modules/experience.api";

const Resume = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    async function getData() {
      const { response, err } = await experienceApi.getAllExperiences();

      if (err) toast.error(err.message);
      if (response) {
        setExperiences(response.data);
      }
    }
    getData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]  py-6 px-10 rounded-xl flex flex-col justify-start items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>

                          {/* Divider with fade effect */}
                          <div className="w-full h-[1px] my-2 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                          {/* Render info points */}
                          <ul className="pl-0 text-white/60 gap-4">
                            {item.info.map((infoPoint, i) => (
                              <li key={i} className="text-left text-xs mb-4 ">
                                {infoPoint}
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-start items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {skills.title} </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-[20px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full h-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold"> {about.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-col gap-y-6 justify-start">
                    {about.info.map((item, index) => {
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <span className="text-white/60 min-w-[100px] text-start">
                            {item.fieldName}
                          </span>
                          <span className="text-xl text-start">
                            {item.fieldValue}
                          </span>
                        </div>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
