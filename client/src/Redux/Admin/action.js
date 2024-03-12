import { ADMINFAILURE, ADMINGETSUCCESS, ADMINREQUEST, MAKEADMIN } from "./actiontype"
import axios from 'axios'


export const getUsers = (token) => (dispatch) =>{
    dispatch({type:ADMINREQUEST});
    axios.get(`http://localhost:8080/users/`,{
         headers:{
        'Content-Type' : "application/json",
        authorization  : `Bearer ${token}`
    }
})
.then((res)=>{
    dispatch({type:ADMINGETSUCCESS,payload:res.data})
})
.catch((err)=>{
    dispatch({type:ADMINFAILURE})
})
} 


export const makeAdminFunction = (id,token) => (dispatch) =>{
    dispatch({type:ADMINREQUEST});
   
    axios.put(`http://localhost:8080/users/users/${id}`, {},{
         headers:{
        'Content-Type' : "application/json",
        authorization  : `Bearer ${token}`
    }
    
})
.then((res)=>{
    alert(res.data);
    dispatch({type:MAKEADMIN,payload:res.data})
})
.catch((err)=>{
    dispatch({type:ADMINFAILURE})
})
} 