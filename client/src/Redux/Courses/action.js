import axios from "axios";
import { COURSEFAILURE, COURSEGET, COURSEREQUEST } from "./actiontype"



export const courseGET = (token) => (dispatch) =>{
    dispatch({type:COURSEREQUEST});
    axios.get(`https://lms-website-loil.onrender.com/couser/`,{
         headers:{
        'Content-Type' : "application/json",
        authorization  : `Bearer ${token}`
    }
})
.then((res)=>{
    dispatch({type:COURSEGET,payload:res.data})
})
.catch((err)=>{
    dispatch({type:COURSEFAILURE})
})
}

export const courseADD = (courses,token) => (dispatch) =>{
    dispatch({type:COURSEREQUEST});
    console.log(courses);
    axios.post(`https://lms-website-loil.onrender.com/couser/addCourse`,courses,{
         headers:{
        'Content-Type' : "application/json",
        authorization  : `Bearer ${token}`
    }
})
.then((res)=>{
    alert("Enroll Successfully")
    dispatch({type:COURSEGET,payload:res.data})
})
.catch((err)=>{
    dispatch({type:COURSEFAILURE})
})
}