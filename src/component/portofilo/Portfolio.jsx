import React, { useEffect } from 'react'
import img1 from '../../asesst/poert1.png'
import img2 from'../../asesst/port2.png'
import img3 from '../../asesst/port3.png'
import 'bootstrap/js/src/modal'



export default function Portfolio() {
    useEffect(()=>{document.title= 'Portfolio'}
    ,[])

    let img=[img1,img2,img3,img1,img3,img2]
  return (
    <div className='mt-3 py-3 text-center'>
        <h1 >PORTFOLIO COMPONENT</h1>
        <div className='d-flex align-items-center justify-content-center text-black'>
              <div className='nameline'></div>
              <i className='fa-solid fa-star mx-4'></i>
              <div className='nameline'></div>
            </div>
            <div className="container py-4 my-4">
                <div className="row g-5">
                    {img.map((val,index)=><div key={index} className="col-md-4">
                        <div className='position-relative rounded overflow-hidden  'onClick={(index)=> <div className='d-block position-fixed top-0 start-0 w-100 h-100 bg-info'>
                            <img src={index.val} className='w-100  h-50' alt=''/>
                        </div>}>
                            <img className='w-100' src={val} alt=""  />
                            <div className='layer  '>
                            </div>
                        </div>
                    
                    </div>)}
                    
                    {/* <div className="col-md-4">
                        <div className='position-relative rounded overflow-hidden '>
                            <img className='w-100' src={img2} alt="" />
                            <div className='layer  '>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='position-relative rounded overflow-hidden '>
                            <img className='w-100' src={img3} alt="" />
                            <div className='layer  '>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='position-relative rounded overflow-hidden '>
                            <img className='w-100' src={img3} alt="" />
                            <div className='layer  '>
                              
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className='position-relative rounded overflow-hidden '>
                            <img className='w-100' src={img2} alt="" />
                            <div className='layer  '>
                              
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className='position-relative rounded overflow-hidden '>
                            <img className='w-100' src={img1} alt="" />
                            <div className='layer  '>
                              
                            </div>
                        </div>
                    </div> */}
                    
                   
                </div>
            </div>
    </div>
  )
}
