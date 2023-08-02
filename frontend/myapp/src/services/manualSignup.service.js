import axios from "axios"
export const manualSignup=(username,password,email)=>{
    return axios.post("http://localhost:5000/users/registerUser",{username:username,password:password,email:email})
}