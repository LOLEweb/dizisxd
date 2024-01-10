"use state";
import React, { FC, useEffect, useState } from "react";
import { Root } from "./lanyard-data.interface";
import axios from "axios";
import Image from "next/image";
import notAlbum from "../assets/NoAlb.png";
import dota from "../assets/dota2.png"
import roblox from "../assets/roblox.png"
import unknown from "../assets/unknown.png"

import { Tooltip } from "@chakra-ui/react";

import { Activity } from "./lanyard-data.interface";

const Active: FC<{ activity: Activity }> = (props) => {
  
  let time: any = props.activity.timestamps ? props.activity.timestamps.start : undefined // берется timestamps

  const date = new Date(time);
  const now = new Date();

  let hours: any = now.getHours();
  let minutes: any = now.getMinutes();
  let seconds: any = now.getSeconds();

  const startTime =
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  const currentTime = hours * 3600 + minutes * 60 + seconds;
  let elapsedTime = currentTime - startTime;

  if (elapsedTime < 0) {
    elapsedTime += 24 * 3600;
  }
  hours = Math.floor(elapsedTime / 3600);
  minutes = Math.floor((elapsedTime % 3600) / 60);
  seconds = elapsedTime % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;

  const finalTime = hours + ":" + minutes + ":" + seconds;


  const [games, setGames] = useState([
    {id: 1, title: 'Dota 2', img: dota},
    {id: 2, title: 'Roblox', img: roblox},

  ])

  return (
    <>
    {
      props.activity.name == "Spotify" ? undefined :
      (props.activity ? (
        <p className=" uppercase text-gray-600 pl-1 pb-2 font-bold">
          Playing a game
        </p>
      ) : undefined)
    }
      
      <div className="flex items-center sm:flex-row cursor-pointer w-full mb-3 sm:px-0 px-2">
        <div className="rounded-[10px] bg-[#141414] relative">
          {/* ======МОЖНО ОПТИМИЗИРОВАТЬ========== */}
          
          {props.activity.name == "Dota 2" ? (
            <Tooltip
                label={`${props.activity.name}`}
                placement="top"
                hasArrow
              >
            <Image
              className="rounded-[10px] sm:w-[125px] w-full"
              width={100}
              height={100}
              alt="No img"
              src={dota}
            />
            </Tooltip>
          ) : (
            undefined
          )}
          {/* ================================= */}

          {props.activity.name == "Spotify" ? undefined :
          (props.activity && props.activity.assets ? (
            props.activity.assets.large_text ? (
              <Tooltip
                label={`${props.activity.assets.large_text}`}
                placement="top"
                hasArrow
              >
                <Image
                  className="rounded-[10px] sm:w-[125px] w-full"
                  width={100}
                  height={100}
                  alt="No img"
                  src={`https://cdn.discordapp.com/app-assets/383226320970055681/${props.activity.assets.large_image}.png`}
                />
              </Tooltip>
            ) : (
              <Image
                className="rounded-[10px] sm:w-[125px] w-full"
                width={100}
                height={100}
                alt="No img"
                src={`https://cdn.discordapp.com/app-assets/383226320970055681/${props.activity.assets.large_image}.png`}
              />
            )
          ) : (
            undefined
          ))}
          

          {props.activity && props.activity.assets ? (
            props.activity.assets.small_text ? (
              <Tooltip
                label={`${props.activity.assets.small_text}`}
                placement="top"
                hasArrow
              >
                <Image
                  className="active active__pos w-full sm:block hidden"
                  width={100}
                  height={100}
                  alt="img"
                  src={`https://cdn.discordapp.com/app-assets/383226320970055681/${props.activity.assets.small_image}.png`}
                />
              </Tooltip>
            ) : (
              <Image
                className="active active__pos w-full"
                width={100}
                height={100}
                alt="img"
                src={`https://cdn.discordapp.com/app-assets/383226320970055681/${props.activity.assets.small_image}.png`}
              />
            )
          ) : undefined}
        </div>
        <div className=" pl-4">
          {props.activity.name == "Spotify" ? undefined : 
            (props.activity ? (
            <h3 className=" text-lg font-bold sm:pt-0 pt-2">
              {props.activity.name}
            </h3>
          ) : (
            <h3 className=" text-lg font-bold">No activity 😴</h3>
          ))}
          {props.activity.name == "Spotify" ? undefined : 
            (props.activity ? (
            <p className="py-1">{props.activity.details}</p>
          ) : undefined)}
          {props.activity.name == "Spotify" ? undefined : 
            (props.activity ? <p>{props.activity.state}</p> : undefined)
          }
          {props.activity.name == "Spotify" ? undefined : 
            (props.activity.timestamps ? (
            <p className="pt-1">Elapsed: {finalTime}</p>
          ) : undefined)
          }
          
        </div>
      </div>
    </>
  );
};

export default Active;
