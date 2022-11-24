import React from 'react'
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main() {
  return (
    <div className='w-full flex'>

      <MainLeft/>
      <MainRight/>
    </div>
  )
}

export default Main