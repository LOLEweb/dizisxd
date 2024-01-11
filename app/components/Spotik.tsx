"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Root } from "./lanyard-data.interface";
import axios from "axios";
import { Tooltip } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import Link from "next/link";


const Spotik = () => {
  const [data, setData] = useState<Root>();

  useEffect(() => {
    const asyncFunc = async () => {
      const data = await axios.get<Root>(
        "https://api.lanyard.rest/v1/users/835837384297545748"
      );
      setData(data.data);
    };
    asyncFunc();
  }, []);

  {
    /*  */
  }
  return (
    <>
    <div className=" uppercase text-gray-600 pl-1 pb-2 font-bold flex gap-2 items-center">
          Listening to <FaSpotify size={18} />
    </div>
    <Link target="_blank" href={`https://open.spotify.com/track/${data?.data.spotify.track_id}?si=1f85dbe540824269`}>
      <div className="flex items-center sm:flex-row cursor-pointer w-full mb-3 sm:px-0 px-2 hover:backdrop-brightness-200 duration-200 rounded-xl z-50">
        <div className="rounded-[10px] bg-[#141414] relative sm:mb-0 mb-2">

            {data?.data.spotify ? 
            <Tooltip placement="top" hasArrow label={data.data.spotify.album}>
                      <Image width={100} height={100} alt="img" className="rounded-[10px] sm:w-[125px] w-full" src={data.data.spotify.album_art_url} />
            </Tooltip>
             : undefined }
        </div>
        <div className=" pl-4">
            {data?.data.spotify ? <p>Album: <span className=" no-underline">{data.data.spotify.album}</span></p> : undefined}
            {data?.data.spotify ? <p>Song: <span className=" no-underline">{data.data.spotify.song}</span></p> : undefined}
            {data?.data.spotify ? <p>Artist: <span className=" no-underline">{data.data.spotify.artist}</span></p> : undefined}
        </div>
      </div>
      </Link>
    </>
  );
};

export default Spotik;
