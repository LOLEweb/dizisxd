import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
return (
<>
  <header className='header '>
    <div className=' flex justify-between items-center navbar px-8 py-5'>
      <div className=' hover:backdrop-brightness-200 duration-200'>
        <a href="#" className='logo text-2xl py-3 px-2'>dizisxd</a>
      </div>
      <nav className='gap-5 md:flex hidden'>
        <a href="#">/about</a>
        <a href="#">/contact</a>
        <a href="#">/projects</a>
        <a href="#">/message</a>
      </nav>
    </div>
  </header>
</>
)
}

export default Header