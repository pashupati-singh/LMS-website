import React from 'react'
import { Logo1 } from '../Icons/Icons'

export const Footer = () => {
  return (
    <div className='wrapper-container w-100% h-96 bg-slate-600 text-white text-lg tracking-widest leading-loose'>
        <p >Your LMS</p>
        <p>22/718 XYZ Nagar</p>
        <p>Bangalore Karnatka India</p>
        <p>XXXXXXXX00</p>

       
            <Logo1 />
       

        <div className="flex justify-center items-end h-2/5">
  <p className="text-center">Copyright © 2024 Freight And Forwarding Inc- All Rights Reserved.</p>
</div>
    </div>
  )
}
