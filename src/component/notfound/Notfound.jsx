import React from 'react'
import logo from'../../asesst/error.svg'
import { useEffect } from 'react'

export default function Notfound() {
  useEffect(()=>
  {document.title='Not found'}
  ,[])
  return (
    <div>
      <img src={logo} alt="" className='w-100 h-100 mx-auto'/>
    </div>
  )
}
