"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Root } from "./lanyard-data.interface";
import axios from "axios";
import { Tooltip } from "@chakra-ui/react";

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
    <p className=" uppercase text-gray-600 pl-2 pb-2 font-bold">
          Listening to
        </p>
      <div className="flex items-center sm:flex-row cursor-pointer w-full mb-3 sm:px-0 px-2 flex-col">
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
    </>
  );
};

export default Spotik;
