import axios from 'axios';
import apiClient from '../util/requestutil';



//USER CALLS
export function loginUser(username:String,pass:String){

    let body = {
        'username': username,
        'password': pass
    }

    return apiClient.post("login", body)
}


export function registerUser(username:String,pass:String,email:String,phoneNumber:String){

    let body = {
        'username': username,
        'password': pass,
        'email':email,
        'phoneNumber':phoneNumber
    }

    return apiClient.post("register", body)
}


const utils = { 
    loginUser: loginUser,
    registerUser: registerUser
}

export default utils;