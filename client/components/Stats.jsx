"use client";

import CountUp from "react-countup";

import { useEffect, useState } from "react";
import visitApi from "@/api/modules/visits.api";
import { toast } from "react-toastify";

const Stats = () => {
  const [stats, setStats] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    async function getData() {
      const { response, err } = await visitApi.fetchStats();

      if (err) toast.error(err.message);
      if (response && response.data) {
        setStats(response.data);
      }
    }
    if (!dataFetched) {
      setDataFetched(true);
      getData();
    }
  }, [dataFetched]);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.value}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.label.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
