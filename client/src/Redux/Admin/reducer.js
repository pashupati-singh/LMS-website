import { ADMINFAILURE, ADMINGETSUCCESS, ADMINREQUEST, LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS, MAKEADMIN } from "./actiontype"



const initialState = {
   user:[],
   msg:""
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case ADMINREQUEST : return{ ...state,loading:true}
        case ADMINGETSUCCESS : return {...state,loading:false,msg:action.payload.msg,user:action.payload.user}
        case MAKEADMIN : return{...state,loading:false,msg:action.payload.msg}
        case ADMINFAILURE : return{...state,loading:false,error:true}
        default : return state
    }
}