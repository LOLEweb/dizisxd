"use client";
import { Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import Spotik from "./Spotik";
import { DiscordStatus, Root } from "./lanyard-data.interface";
import axios from "axios";
import Link from "next/link";
import Active from "./Active";
import Activities from "./Activities";

const status = (status: DiscordStatus | undefined) => {
  switch (status) {
    case "online":
      return "border-green-500";
    case "idle":
      return "border-yellow-500";
    case "dnd":
      return "border-red-500";
    case "offline":
      return "border-gray-500";
    default:
      return "border-gray-500";
  }
};

const Main = () => {
  const [data, setData] = useState<Root>();
  const [isLoading, setLoading] = useState(false)



  useEffect(() => {
    // setLoading(true)
    const asyncFunc = async () => {
      const data = await axios.get<Root>(
        "https://api.lanyard.rest/v1/users/835837384297545748"
      );
      setData(data.data);
      // setLoading(false)
    };
    asyncFunc();
  }, []);

  const birthDate = new Date("2006-04-22"); // Предположим, что это твоя дата рождения\
  const currentDate = new Date();
  const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
  const monthsPassed = currentDate.getMonth() - birthDate.getMonth();
  const fractionOfYear = ageInYears + monthsPassed / 12;


  
// {isLoading && 'Loading....'}
  return (
    <>
      <main className="text-white flex flex-grow py-5">
        <div className="main">
          <div className="text-center px-3 flex justify-center flex-col items-center">
            <div className="relative text-center mb-5">
              <Tooltip
                label="Discord status"
                placement="top"
                hasArrow
                bg="black"
              >
                <img
                  src={"https://avatars.githubusercontent.com/u/125983594?v=4"}
                  alt="avatar"
                  className={`main__image border-[3px] border-solid ${status(
                    data?.data.discord_status
                  )}`}
                />
              </Tooltip>
            </div>

            <h2 className=" text-3xl md:text-4xl font-bold">Welcome!</h2>
            <div className=" text-lg md:text-xl">
              <p>
                On the Internet, people call me{" "}
                <span className="nick">dizisxd</span>.
              </p>
              <p>
                I m a software/web developer from Russia who s{" "}
                <Tooltip
                  placement="top"
                  hasArrow
                  label={fractionOfYear.toFixed(6)}
                >
                  <span>17 years old</span>
                </Tooltip>{" "}
                and has been coding for over <span>2 years</span>.
              </p>
              <p>
                You can find more info in{" "}
                <a className=" font-semibold cursor-pointer">/about</a>.
              </p>
            </div>
          </div>
          <div className="bg-[#141821] rounded-[10px] p-3 mt-3 w-full sm:max-w-[500px]">
            {data?.data.activities ? <Activities activities={data?.data.activities}/> : <Spotik />}
          </div>
          
          
        </div>
      </main>
    </>
  );
};


export default Main;
