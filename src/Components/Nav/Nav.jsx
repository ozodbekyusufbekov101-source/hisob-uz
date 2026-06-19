import React from 'react'
import logo from "../../assets/logo.png"
import avatar from '../../assets/Avatar.png'

function Nav() {
  return (
    <nav className='flex justify-between items-center py-[10px] px-[20px]'>
      <div className='flex items-center gap-x-[25px]'>
        <div className='w-[22px] cursor-pointer hidden md:block'>
          <i className="fas fa-bars"></i>
        </div>
        <img className='w-[130px] cursor-pointer' src={logo} alt="Hisob.uz logo" />
      </div>

      <div className='flex items-center md:w-[400px] py-[8px] px-[12px] border border-[#ccc] rounded-[25px]'>
        <input 
          type="text" 
          placeholder='Qidirish...' 
          aria-label="Qidiruv"
          className='border-0 w-full outline-none focus:ring-0 focus:border-transparent'
        />
        <i className="fas fa-search"></i>
      </div>

      <div className='flex items-center gap-x-[25px]'>
        <div className='flex gap-x-[25px] items-center cursor-pointer hidden md:block'>
          <i className="fas fa-video" aria-label="Video"></i>
          <i className="fab fa-windows" aria-label="Ilovalar"></i>
          <i className="fas fa-bell" aria-label="Bildirishnomalar"></i>
        </div>
        <img className='w-[25px] rounded-full cursor-pointer' src={avatar} alt="Foydalanuvchi profili" />
      </div>
    </nav>
  )
}

export default Nav