"use client";

import CountUp from "react-countup";
import React, { useEffect, useState } from "react";
import visitApi from "@/api/modules/visits.api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Stats = () => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const { response, err } = await visitApi.fetchStats();

      if (err) toast.error(err.message);
      if (response && response.data) {
        setStats(response.data);
      }
      setIsLoading(false);
    }

    // We only want to fetch once on mount
    getData();
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 min-h-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {isLoading ? (
            // Custom, unique Stats loading indicator
            <div className="w-full flex flex-col items-center justify-center py-4 xl:py-8">
              <div className="flex items-end gap-2 h-[40px] mb-4">
                {[...Array(5)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-2 xl:w-3 bg-accent rounded-t-md"
                    initial={{ height: "20%" }}
                    animate={{ height: ["20%", "100%", "20%"] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: index * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              <p className="text-accent/80 uppercase tracking-[0.2em] text-xs font-semibold animate-pulse">
                Crunching Data...
              </p>
            </div>
          ) : (
            stats.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex gap-4 items-center justify-center xl:justify-start"
                >
                  <CountUp
                    end={item.value}
                    duration={5}
                    delay={2}
                    className="text-2xl xl:text-5xl font-extrabold"
                  />
                  <p
                    className={`${item.label.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                      } leading-snug text-white/80`}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;
