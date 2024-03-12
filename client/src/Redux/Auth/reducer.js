import { LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS } from "./actiontype"



const initialState = {
    token:"",
    name:"",
    msg:"",
    isAuth:false,
    admin:"",
    loading:false,
    error:false
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGINREQUEST : return{ ...state,loading:true}
        case LOGINSUCCESS : return {...state,admin:action.payload.admin,loading:false,msg:action.payload.msg,token:action.payload.token,isAuth:true,name:action.payload.name}
        case LOGINFAILURE : return{...state,loading:false,error:true}
        default : return state
    }
}