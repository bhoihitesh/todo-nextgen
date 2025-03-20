import { userType } from "@/customeTypes";
import axios from "axios"

export const getUsers = async() => {
    return await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`)
}

export const login = async(user: userType) => {
    return await axios.post(`http://localhost:5000/v1/api/login`,user, {withCredentials: true});
}

export const logout = async()=>{
    return await axios.delete('http://localhost:5000/v1/api/logout',{withCredentials: true})
}