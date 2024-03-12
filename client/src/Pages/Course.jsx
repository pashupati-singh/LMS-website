import React, { useEffect, useState } from 'react'
import { Lock, Play, SadFace } from '../Icons/Icons'
import { Skeleton } from '../Components/Skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { courseGET } from '../Redux/Courses/action'

export const Course = () => {
   
    const {coursesClient} = useSelector((store)=>store.coursesReducer)
  //   const FetchCourse = () =>{
  //     dispatch(courseGET(token))
  //  }
  
  //  useEffect(()=>{
  //   FetchCourse()
  //  },[])
  
  console.log(coursesClient);

    if(!coursesClient){
        return (
            <div >
             <div> 
             <Lock className='inline-block mb-2' />       
             <p className='text-lg font-semibold font-sans'>You Haven't Enroll any of the course <SadFace /> </p>
             </div>
      <div className="wrapper-container grid place-item-center grid-cols-3 gap-4">
      <Skeleton className="h-52 w-52 mt-2" />
       <Skeleton className="h-52 w-52 mt-2" />
        <Skeleton className="h-52 w-52 mt-2" />
        <Skeleton className="h-52 w-52 mt-2" />
        <Skeleton className="h-52 w-52 mt-2" />
        <Skeleton className="h-52 w-52 mt-2" />
      </div>
       
        </div>)
    }


  return (
    <>
    <div  className='wrapper-container'>
    <p className='text-4xl font-bold text-blue-500 mt-[30px]'>Today's Lecture</p>
<div className='grid place-item-center grid-cols-3 gap-4'>
    
   <div className='h-52 w-52 mt-2 bg-gray-500 rounded-lg relative'>
    <img className='h-40 rounded-lg opacity-30' src="https://img-b.udemycdn.com/course/750x422/4321230_70a0.jpg" alt="err" />
    <p className='text-white'>Lecture 1</p>
     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Play />
  </div>
 {coursesClient.length > 0?<p className='text-white'>{coursesClient[0]}</p>:""}
   </div>
   <div className='h-52 w-52 mt-2 bg-gray-500 rounded-lg relative'>
     <img className='h-40 rounded-lg opacity-30' src="https://img-b.udemycdn.com/course/750x422/4321230_70a0.jpg" alt="err" />
     <p className='text-white'>Lecture 2</p>
     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Play />
  </div>
  {coursesClient.length > 0?<p className='text-white'>{coursesClient[0]}</p>:""}
   </div>
   <div className='h-52 w-52 mt-2 bg-gray-500 rounded-lg relative'>
     <img className='h-40 rounded-lg opacity-30' src="https://img-b.udemycdn.com/course/750x422/4321230_70a0.jpg" alt="err" />
     <p className='text-white'>Lecture 3</p>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Play />
  </div>
  {coursesClient.length > 0?<p className='text-white'>{coursesClient[0]}</p>:""}
   </div>
   <div className='h-52 w-52 mt-2 bg-gray-500 rounded-lg relative'>
     <img className='h-40 rounded-lg opacity-30' src="https://img-b.udemycdn.com/course/750x422/4321230_70a0.jpg" alt="err" />
     <p className='text-white'>Lecture 1</p>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Play />
  </div>
  {coursesClient.length > 0?<p className='text-white'>{coursesClient[1]}</p>:""}
   </div>
   <div className='h-52 w-52 mt-2 bg-gray-500 rounded-lg relative'>
     <img className='h-40 rounded-lg opacity-30' src="https://img-b.udemycdn.com/course/750x422/4321230_70a0.jpg" alt="err" />
     <p className='text-white'>Lecture 2</p>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Play />
  </div>
  {coursesClient.length > 0?<p className='text-white'>{coursesClient[1]}</p>:""}
   </div>
   <div className='h-52 w-52 mt-2 bg-gray-500 rounded-lg relative'>
     <img className='h-40 rounded-lg opacity-30' src="https://img-b.udemycdn.com/course/750x422/4321230_70a0.jpg" alt="err" />
     <p className='text-white'>Lecture 3</p>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Play />
  </div>
  {coursesClient.length > 0?<p className='text-white'>{coursesClient[1]}</p>:""}
   </div>
   <div className='h-52 w-52 mt-2 bg-gray-500 rounded-lg relative'>
     <img className='h-40 rounded-lg opacity-30' src="https://img-b.udemycdn.com/course/750x422/4321230_70a0.jpg" alt="err" />
     <p className='text-white'>Lecture 1</p>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Play />
  </div>
  {coursesClient.length > 0?<p className='text-white'>{coursesClient[2]}</p>:""}
   </div>
   <div className='h-52 w-52 mt-2 bg-gray-500 rounded-lg relative'>
     <img className='h-40 rounded-lg opacity-30' src="https://img-b.udemycdn.com/course/750x422/4321230_70a0.jpg" alt="err" />
     <p className='text-white'>Lecture 2</p>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Play />
  </div>
  {coursesClient.length > 0?<p className='text-white'>{coursesClient[2]}</p>:""}
   </div>
   <div className='h-52 w-52 mt-2 bg-gray-500 rounded-lg relative'>
   <img className='h-40 rounded-lg opacity-30' src="https://img-b.udemycdn.com/course/750x422/4321230_70a0.jpg" alt="err" />
   <p className='text-white'>Lecture 3</p>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Play />
  </div>
  {coursesClient.length > 0?<p className='text-white'>{coursesClient[2]}</p>:""}
   </div>
</div>
</div>
</>
  )
}

