import { SIGNUP_USER_LOADING, SIGNUP_USER_ERROR, SIGNUP_USER_SUCCESS, SIGNIN_USER_LOADING, SIGNIN_USER_SUCCESS, SIGNIN_USER_ERROR, SIGNOUT_USER } from "./userActionTypes"
import axios from 'axios';

export const signupAPI = (userData)=>async(dispatch)=>{
    dispatch({type:SIGNUP_USER_LOADING});
    try {
        const response = await axios.post('http://localhost:7600/signup',userData);
        //console.log(response.data);
        dispatch({type:SIGNUP_USER_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:SIGNUP_USER_ERROR})
    }
}

export const signinAPI = (userData)=>async(dispatch)=>{
    dispatch({type:SIGNIN_USER_LOADING});
    try {
        const response = await axios.post('http://localhost:7600/signin',userData);
        //console.log(response.data);
        dispatch({type:SIGNIN_USER_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:SIGNIN_USER_ERROR})
    }
}

export const logoutAPI = () => ({ type: SIGNOUT_USER });