import React from 'react'
import { useEffect } from 'react'
export default function About() {
    useEffect(()=>{
        document.title='About'
    },[])
    return (
        <div className=' green h-100 text-center py-5  text-white'>
            <h1 className='pt-5 mt-5'> ABOUT COMPONENT </h1>
            <div className='d-flex align-items-center justify-content-center text-white'>
              <div className='nameline'></div>
              <i className='fa-solid fa-star mx-4'></i>
              <div className='nameline'></div>
            </div>
            <div className="container mt-5 pt-2 mb-5 ">
                <div className="row g-5">
                    <div className="col-md-6 ">
                        <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
