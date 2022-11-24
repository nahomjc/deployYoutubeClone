import React from 'react'
import Image from 'next/image'
import img1 from "../img/img1.jpg"

function Video() {
  return (
    <div className='bg-[#181818] w-[280px] h-69 flex flex-col'>

     <Image src={img1}/>
        <div className='flex justify-around mt-2'>

<img  src="https://yt3.ggpht.com/i4-Gj-EG0gxvgRjxD5SUxHuTZ8Ogknxw7YfXJ-hCPDPALP5lrTTO7wDEXIeRkik-LIV_DOBI=s900-c-k-c0x00ffffff-no-rj"
alt=''
className='rounded-full w-[11%] h-8'
/>
<div className='w-[80%] text-sm font-bold'>
    
    <h3 className='text-sm text-white'> lorem ipsum dolor sit amet cnsecterur adipisicing elit. Aut m harum</h3>
<h3 className='text-[12px] text-gray-400'>HEY</h3>
<h3 className='text-[12px] text-gray-400'>181k Views-11hours</h3>
</div>
        </div>
    </div>
  )
}

export default Video