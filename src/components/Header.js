import React from 'react'
import {Bars3Icon} from "@heroicons/react/20/solid"
import {MicrophoneIcon,} from "@heroicons/react/24/outline"
import  {MagnifyingGlassIcon,EllipsisVerticalIcon,ViewfinderCircleIcon} from "@heroicons/react/20/solid"
import Image from 'next/image'
function Header() { 
  return (
    <div className='flex justify-between items-center w-full h-10 px-6 py-8 bg-[#202020] text-white'>
    <div className='flex cursor-pointer '>
        <Bars3Icon className='h-7 mr-4 hover:bg-gray-600'/>
        
    <h1 className='text-xl font-bold'>YouTube </h1>
    </div>
    <div className='flex items-center'>
    <form className='flex w-[600px] items-center bg-[#313131]'>

      <input type="text" placeholder='Search' className='bg-black flex-1 h-10 ' />
      <button className=' h-10 w-16 flex items-center justify-center '>
      <MagnifyingGlassIcon className='h-5 hover:bg-gray-600'/>
      </button>
    </form>

    <button className='bg-black h-10 w-10 ml-4 rounded-full flex justify-center items-center'>
    <MicrophoneIcon className='h-5'/>
    </button>
    </div>

    <div className='flex justify-between w-32'>
      <EllipsisVerticalIcon className='h-6 cursor-pointer'/>
      <ViewfinderCircleIcon className='h-6 cursor-pointer'/>

    
  <h3 className='text-[12px] text-gray-400'>Nahom </h3>
  <Image 
     src="https://yt3.ggpht.com/i4-Gj-EG0gxvgRjxD5SUxHuTZ8Ogknxw7YfXJ-hCPDPALP5lrTTO7wDEXIeRkik-LIV_DOBI=s900-c-k-c0x00ffffff-no-rj"
     alt=""
     width={20}
     height={3}
     objectFit="contain"
     className='cursor-pointer rounded-full '
     
     /> 
    </div>
    </div>
  )
}

export default Header