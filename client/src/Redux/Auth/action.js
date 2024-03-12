import { LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS } from "./actiontype"
import axios from 'axios'


export const LoginFunction = (object) => (dispatch) =>{
    dispatch({type:LOGINREQUEST})
    axios.post("https://lms-website-loil.onrender.com/users/login",object).then((res)=>{
        alert(res.data.msg);
        dispatch({type:LOGINSUCCESS,payload:res.data})
    })
    .catch((err)=>dispatch({type:LOGINFAILURE}))

} 