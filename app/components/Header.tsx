import { Button, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
return (
<>
  <header className='header backdrop-blur-md bg-gradient-to-r from-[#0d1c28] via-[#15315182] to-[#0d1c28]'>
    <div className=' flex justify-between items-center navbar px-8 py-5'>
      <div className=' hover:backdrop-brightness-200 duration-200'>
        <Link href={'/'} legacyBehavior>
          <a href="#" className='logo text-2xl py-3 px-2'>dizisxd</a>
        </Link>
      </div>
      <nav className='gap-5 md:flex hidden'>
        <Link href={'./about'} legacyBehavior>
          <a>/about</a>
        </Link>
         <Link href={'./contact'} legacyBehavior>
          <a>/contact</a>
        </Link> 
        <Link href={'./skills'} legacyBehavior>
          <a>/skills</a>
        </Link> 
      </nav>
    </div>
  </header>
</>
)
}

export default Header