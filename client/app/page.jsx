"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const data = {
  name: "Pranay Dhongade",
  role: "Software Developer",
  cv: "https://drive.google.com/drive/folders/12J11YRafiJh5wtDaM3oIQYcPe7DqH_ix?usp=sharing",
  about:
    "I am a B.Tech CSE Student at the Indian Institute of Information Technology, Sonepat, " +
    " with hands-on experience in software developement, particularly in mobile and web applications." +
    " I have interned at Techlane Ai Pvt Ltd, where I led teams in app app development," +
    " including the successful launch of the Tawx app, which garnered 2,000+ downloads." +
    " My technical skills include Flutter, MERN stack, Firebase, AWS, and GCP. " +
    "I have a strong foundation in DSA and OOP and am passionate about building scalable and efficient applications.",
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{data.role}</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">{data.name}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{data.about}</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => window.open(data.cv, "_blank")}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
