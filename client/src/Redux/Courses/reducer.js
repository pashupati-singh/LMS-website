import { COURSEADD, COURSEFAILURE, COURSEGET, COURSEREQUEST } from "./actiontype"




const initialState = {
    coursesClient:[],
    msg:""
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case COURSEREQUEST : return{ ...state,loading:true}
        case COURSEGET : return {...state,loading:false,coursesClient:action.payload.courses}
        case COURSEADD : return{...state,loading:false,msg:action.payload.message}
        case COURSEFAILURE : return{...state,loading:false,error:true}
        default : return state
    }
}