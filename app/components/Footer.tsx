import { Icon } from '@chakra-ui/react'
import { IoLogoDiscord } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import React from 'react'

const Footer = () => {
  return (
    <div className=' text-sm text-gray-400 px-8 py-4 flex justify-between items-center bg-[#171923] md:flex-row flex-col-reverse'>
      <div>© 2019-2024 dizisxd. All rights reserved.</div>
      <div className='flex gap-3'>
        <a className='hover:backdrop-brightness-200 duration-200 p-2' target='_blank' href="https://discord.com/users/835837384297545748"><IoLogoDiscord size={25}/></a>
        <a className='hover:backdrop-brightness-200 duration-200 p-2' target='_blank' href="https://github.com/LOLEweb"><FaGithub size={25}/></a>
        <a className='hover:backdrop-brightness-200 duration-200 p-2' target='_blank' href="https://t.me/diziSXDD"><FaTelegram size={25}/></a>
      </div>
    </div>
  )
}

export default Footer