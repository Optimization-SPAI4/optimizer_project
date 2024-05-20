import React from 'react'
import logo from '../pic/Logo_opt3.png'
import Image from 'next/image'


function Navbar() {
  return (
    <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide sticky top-0 z-50'>
  <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
    <a href=""><Image src={logo} alt="logo" className='w-10' />
    </a>
    
  </div>
</header>
  )
}

export default Navbar