import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { courseADD, courseGET } from '../Redux/Courses/action';
import { useNavigate } from 'react-router-dom';

export const Enroll = () => {
    const {isAuth} = useSelector((store)=>store.authReducer)
    const navigate = useNavigate()
    const [render,setRender] = useState(false)
    const dispatch = useDispatch();
    const [selectedItems, setSelectedItems] = useState([]);
    const {token} = useSelector((store)=>store.authReducer)
    const {coursesClient} = useSelector((store)=>store.coursesReducer)


  const handleItemClick = (item) => {
   
    if (!selectedItems.includes(item)) {
        if (selectedItems.length < 3) {
            setSelectedItems([...selectedItems, item]);
        } else {
            alert("Only 3 Course's")
        }
    } else {
        setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    }
  };

  const courses = [
    { name: 'HTML', price: '5' },
    { name: 'CSS', price: '6' },
    { name: 'JavaScript', price: '7' },
    { name: 'Java', price: '10' },
    { name: 'Python', price: '7' },
    { name: 'Spring Boot', price: '12' },
    { name: 'React', price: '15' },
    { name: 'Tailwind', price: '14' },
    { name: 'MySQL', price: '7' },
    { name: 'PHP', price: '10' },
    { name: 'C', price: '15' },
    { name: 'C++', price: '13' },
    { name: 'Material UI', price: '13' },
    { name: 'Angular', price: '14' },
    { name: 'Docker Mastery', price: '7' },
    { name: 'Master Jenkins', price: '10' },
];


const handleEnroll = ()=>{
     if(!isAuth){
        return navigate('/login')
     }
     if(coursesClient !== undefined){
        alert('you already enrolled your courses')
     }else{
        setRender(!render)
       const obj={courses:selectedItems}
        dispatch(courseADD(obj,token))
        dispatch(courseGET(token))
        setSelectedItems([])
     }
}



const calculateTotalAmount = () => {
    let total = 0;
    selectedItems.forEach((item) => {
        const course = courses.find((course) => course.name === item);
        if (course) {
            total += +(course.price);
        }
    });
    return total;
};

  return (
    
<div className='wrapper-container grid grid-cols-4 gap-4 mt-10'>
            {courses.map((course, index) => (
                <div key={index} className={`w-[100px] cursor-pointer h-[100px] border-2 border-sky-500 rounded-lg text-lg text-gray-400 grid place-items-center relative ${selectedItems.includes(course.name) ? 'bg-blue-100' : ''}`} onClick={() => handleItemClick(course.name)}>
                    {selectedItems.includes(course.name) && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 absolute top-2 right-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                        </svg>
                    )}
                    <div>{course.name}</div>
                    <div className='text-sm mt-[-5px] '>₹{course.price}k</div>
                </div>
            ))}
            <div className="col-span-4 flex justify-center">
                <button onClick={handleEnroll} disabled={selectedItems.length<3} className='w-[600px] h-8 bg-blue-600 border-2 rounded-lg text-white '>Enroll - Total: ₹{calculateTotalAmount()}k</button>
            </div>
        </div>
  )
}
