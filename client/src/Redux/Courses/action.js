import axios from "axios";
import { COURSEFAILURE, COURSEGET, COURSEREQUEST } from "./actiontype"



export const courseGET = (token) => (dispatch) =>{
    dispatch({type:COURSEREQUEST});
    axios.get(`http://localhost:8080/couser/`,{
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
    axios.post(`http://localhost:8080/couser/addCourse`,courses,{
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