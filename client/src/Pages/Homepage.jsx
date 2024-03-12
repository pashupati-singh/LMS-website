import React, { useEffect } from 'react'
import image from '../Image/Home-LMS.png'
import { Course } from '../Components/Course'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Enroll } from '../Components/Enroll';
import { Toppers } from '../Components/Toppers';
import { courseGET } from '../Redux/Courses/action';
import { useDispatch, useSelector } from 'react-redux';

export const Homepage = () => {
  const {token} = useSelector((store)=>store.authReducer)
  const dispatch = useDispatch()

  const FetchCourse = () =>{
    dispatch(courseGET(token))
 }

 useEffect(()=>{
  FetchCourse()
 },[])



  return (
  
    <div className='wrapper-container w-100% h-30 mt-[80px]'>
    <div className='flex justify-between'>
        <div className='w-50%'>
            <img width={'70%'} className='rounded-lg' src={image} alt="err" />
        </div>
        <div className='w-35%'> 
            <p className=' m-8 text-2xl leading-loose text-justify tracking-wide font-sans'>
                <span className='text-2xl font-bold text-stone-950'>I</span>n order to create an
                engaging learning experience,<br />
                the role of instructor is optional,<br />
                but the role of learner is essential.
            </p>
        </div>
    </div>
    <div>
      <p className='text-4xl font-bold text-blue-500 mt-[80px]'>Our Course's</p>
      <Course />
    </div>
    
    <div>
      <p className='text-4xl font-bold text-blue-500 mt-[80px] '>Select your course's</p>
      <Enroll />
    </div>

    <div>
      <p className='text-4xl font-bold text-blue-500 mt-[80px]'>Our Students</p>
      <Toppers />
    </div>
    
</div>
  )
}
