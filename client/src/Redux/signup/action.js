import { SIGNUPFAILURE, SIGNUPREQUEST, SIGNUPSUCCESS } from "./actiontype"
import axios from 'axios'


export const SignFunction = (object) => (dispatch) =>{
    dispatch({type:SIGNUPREQUEST})
    axios.post("http://localhost:8080/users/register",object).then((res)=>{
       alert(res.data);
        dispatch({type:SIGNUPSUCCESS,payload:res.data})
    })
    .catch(()=>dispatch({type:SIGNUPFAILURE}))

} 