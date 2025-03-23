"use client";
import { userType } from "@/customeTypes";
import axios from "axios"

// user API
export const getUsers = async() => {
    return await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`);
}

// Update user
export const updateUser = async(payload: any) =>{
    return await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, payload);
}

// login API
export const login = async(user: userType) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/login`,user, {withCredentials: true});
}

// logout API
export const logout = async()=>{
    return await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/logout`,{withCredentials: true})
}