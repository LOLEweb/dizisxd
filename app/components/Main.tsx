"use client";
import { Tooltip } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import Spotik from './Spotik';
import { DiscordStatus, Root } from './lanyard-data.interface';
import axios from 'axios';
import Link from 'next/link';
import Active from './Active';


const status = (status:DiscordStatus | undefined) => {
switch (status) {
case 'online': return 'bg-green-500'
case 'idle': return 'bg-yellow-500'
case 'dnd': return 'bg-red-500'
case 'offline': return 'bg-gray-500'
default: return 'bg-gray-500'
}
}


const Main = () => {

const [data, setData] = useState<Root>()

  useEffect(() => {
  const asyncFunc = async () => {
  const data = await axios.get<Root>("https://api.lanyard.rest/v1/users/835837384297545748")
    setData(data.data)
    }
    asyncFunc()
    }, [])

    const birthDate = new Date('2006-04-22'); // Предположим, что это твоя дата рождения\
    const currentDate = new Date();
    const mill = currentDate.getMilliseconds()
    const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsPassed = currentDate.getMonth() - birthDate.getMonth();
    const fractionOfYear = ageInYears + monthsPassed / 12;


    return (
    <>
      <main className='text-white flex flex-grow py-5'>
        <div className='main'>
          <div className='text-center px-3 flex justify-center flex-col items-center'>

            <div className="relative text-center mb-5">
              <img src={'https://avatars.githubusercontent.com/u/125983594?v=4'} alt="avatar" className="main__image" />
              <Tooltip label='Discord status' placement='bottom' closeDelay={300} hasArrow bg='black'>
                {data?.data.active_on_discord_desktop ? <div className={`circle circle__pos ${status(data?.data.discord_status)}`}></div>
                : data?.data.active_on_discord_mobile ? <div className={`phone phone__pos ${status(data?.data.discord_status)} w-10 h-10`}></div>
                : <div className={`circle circle__pos ${status(data?.data.discord_status)}`}></div>
                }
              </Tooltip>
            </div>

            <h2 className=' text-3xl md:text-4xl font-bold'>Hello👋</h2>
            <div className=' text-lg md:text-xl'>
              <p>On the Internet, people call me <span className='nick'>dizisxd</span>.</p>
              <p>I m a software/web developer from Russia who s <Tooltip placement='top' hasArrow
                  label={fractionOfYear.toFixed(6)}><span>17 years old</span></Tooltip> and has been coding for over <span>2 years</span>.
              </p>
              <p>You can find more info in 
                
                  <a className=' font-semibold'>/about</a>
                
              .</p>
              
            </div>
          </div>
          {/* <Spotik /> */}
          <Active />
        </div>
      </main>
    </>
    )
    }
// ?если актив есть, то он появляется

// :иначе пустая картинка
//     

    export default Main