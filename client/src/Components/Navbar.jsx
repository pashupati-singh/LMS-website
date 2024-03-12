import React from 'react'
import { Logo } from '../Icons/Icons'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  const {name} = useSelector((store)=>store.authReducer)
  const {admin} = useSelector((store)=>store.authReducer)
  const {isAuth} = useSelector((store)=>store.authReducer)
  const navigate = useNavigate()

  
  return (
    <div className='wrapper-container w-100% h-10 bg-slate-600 '>
        <div className="flex items-center gap-1 cursor-pointer flex justify-between ">
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}><Logo/>
          <p className="font-semibold text-white">
            <span className="text-grey-950">Y</span>our<span className="text-grey-950">L</span>MS
          </p></div>
          <div className="flex text-white font-semibold items-center gap-5 cursor-pointer ">
          <Link to={'/course'} className='hover:text-sky-200 hover:underline decoration-2'>Course</Link>
           {isAuth? <Link to={'/login'} className='hover:text-sky-200 hover:underline decoration-2'>{name}</Link>:<Link to={'/login'} className='hover:text-sky-200 hover:underline decoration-2'>Login</Link>}
            <Link to={'/sign'} className='hover:text-sky-200 hover:underline decoration-2'>Sign Up</Link>
            <Link to={'/about'} className='hover:text-sky-200 hover:underline decoration-2'>About US</Link>
            <Link to={'/contact'} className='hover:text-sky-200 hover:underline decoration-2'>Contact</Link>
            {admin?<Link to={'/admin'} className='hover:text-sky-200 hover:underline decoration-2'>Admin</Link>:""}
        </div>
        </div>
       
    </div>
  )
}
