import { SIGNIN_USER_ERROR, SIGNIN_USER_LOADING, SIGNIN_USER_SUCCESS, SIGNOUT_USER, SIGNUP_USER_ERROR, SIGNUP_USER_LOADING, SIGNUP_USER_SUCCESS } from "./userActionTypes";

const accessToken= localStorage.getItem('accessToken') || "";
const email= localStorage.getItem('email') || "";
const initState={
   accessToken:accessToken,
   email:email,
   loading:false,
   true:false
};

export const userReducer = (state=initState,{type,payload})=>{
     switch(type){
        case SIGNUP_USER_LOADING:{
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case SIGNUP_USER_ERROR:{
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        case SIGNUP_USER_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
            }
        }
        case SIGNIN_USER_LOADING:{
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case SIGNIN_USER_ERROR:{
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        case SIGNIN_USER_SUCCESS:{
            //console.log(payload.accessToken)
            localStorage.setItem('accessToken',JSON.stringify(payload.accessToken))
            localStorage.setItem('email',JSON.stringify(payload.email))
            return {
                ...state,
                loading:false,
                error:false,
                accessToken:payload.accessToken,
                email:payload.email,
            }
        }
        case SIGNOUT_USER: {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("email");
            return {
              ...state,
              loading: false,
              error: false,
              accessToken: "",
              email: "",
            };
          }
        default:{
            return state
        }
     }
     
}