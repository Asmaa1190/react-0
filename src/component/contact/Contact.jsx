
import { FormGroup,FormControl,InputLabel,Input } from '@mui/material'
import React, { useEffect } from 'react'


export default function Contact() {
    useEffect(()=>{
        document.title='Contact'
    },[])
    return (
        <div className='mt-3 py-3 text-center'>
            <h1>CONATCT SECTION</h1>
            <div className='d-flex align-items-center justify-content-center text-black'>
                <div className='nameline'></div>
                <i className='fa-solid fa-star mx-4'></i>
                <div className='nameline'></div>
            </div>
            <div className="container w-50 p-5">
                <FormGroup>
                    <FormControl className='mb-3 pb-3  '>
                        <InputLabel className='word'>User Name :</InputLabel>
                        <Input/>
                    </FormControl>
                    <FormControl className='mb-3 pb-3'>
                        <InputLabel className='word'>User Age :</InputLabel>
                        <Input/>
                    </FormControl>
                    <FormControl className='mb-3 pb-3'>
                        <InputLabel className='word'>User Email:</InputLabel>
                        <Input/>
                    </FormControl>
                    <FormControl className='mb-3 pb-3'>
                        <InputLabel className='word' >User password :</InputLabel>
                        <Input />
                    </FormControl>
                </FormGroup>
                <button className='btn green text-white d-block  '>Send Message</button>
            </div>
        </div>
    )
}
