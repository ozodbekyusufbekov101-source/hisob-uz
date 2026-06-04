import React from 'react'
import logo from "../../assets/logo.png"
import avatar from '../../assets/Avatar.png'
function Nav() {
  return (
    <>
      <nav className='flex justify-between items-center py-[10px] px-[20px]'>
        <div className='flex items-center gap-x-[25px]'>
          <div className=' w-[22px] cursor-pointer hidden md:block'>
            <i class="fas fa-bars"></i>
          </div>
          <img className='w-[130px] cursor-pointer' src={logo} alt="Logo error" />
        </div>
        <div className='flex items-center md:w-[400px] py-[8px] px-[12px] border border-[#ccc] rounded-[25px]'>
          <input type="text" placeholder='Search' className='boder-0 w-full outline-none focus:ring-0 focus:border-transparent'/>
          <i class="fas fa-search"></i>
        </div>
        <div className='flex items-center gap-x-[25px]'>
          <div className='flex gap-x-[25px] items-center  cursor-pointer hidden md:block'>
            <i class="fas fa-video"></i>
            <i class="fab fa-windows"></i>
            <i class="fas fa-bell"></i>
          </div>
          <img className='w-[25px] rounded-full cursor-pointer' src={avatar} alt="Avatar error" />
        </div>
      </nav >
    </>
  )
}

export default Nav