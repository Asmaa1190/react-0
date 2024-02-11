import React, { useEffect } from 'react'
import logo from '../../asesst/avataaars.svg'

export default function Home() {
  useEffect(()=>{
  document.title='Home'}
  ,[])
  return (
    <div className=' green h-100 d-flex align-items-center justify-content-center'>
        <div className='text-white text-center my-3 '>
            <img className='w-75 mb-3' src={logo} alt=''  />
            <h1  >START FRAMEWORK</h1>
            <div className='d-flex align-items-center justify-content-center text-white'>
              <div className='nameline'></div>
              <i className='fa-solid fa-star mx-4'></i>
              <div className='nameline'></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>

        </div>

    </div>
  )
}
