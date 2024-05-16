import React from 'react'


function Navbar() {
  return (
    <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
  <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
    <a href="javascript:void(0)"><img src="https://cdn.discordapp.com/attachments/1008310534598295593/1240501546576511086/Logo_opt3.png?ex=6646ca98&is=66457918&hm=2b0b108f7c0bf37a6d5a61d8595b35e22b0f3209ecf6d43a87545784b8790d82&" alt="logo" className='w-10' />
    </a>

    
    <div className='flex max-lg:ml-auto space-x-3'>
      <button
        className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Login</button>
      <button
        className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Sign
        up</button>

      <button id="toggleOpen" className='lg:hidden'>
        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
  )
}

export default Navbar