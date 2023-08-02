import axios from "axios"
export const checkSession=()=>{
    return axios.get("http://localhost:5000/users/checkSession",{headers:{
        authorization:JSON.parse(localStorage.getItem('authKey'))
    }})
}