"use client";
import { userType } from "@/customeTypes";
import axios from "axios"

// get records API
export const getRecords =async()=>{
    return await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/records`);
}

// Add record API
export const addRecord = async(payload: any) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/add-record`,payload);
}

// Update record API by id
export const updateRecord = async(id: string, payload: any) => {
    return await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/update-record/${id}`,payload);
}

// Delete record API by id
export const deleteRecord = async(id: string) =>{
    return await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/delete-record/${id}`);
}

// Get all user API
export const getUsers = async() => {
    return await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`);
}

// Update user API
export const updateUser = async(payload: any) =>{
    return await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, payload);
}

// Login API
export const login = async(user: userType) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/login`,user, {withCredentials: true});
}

// Logout API
export const logout = async()=>{
    return await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/logout`,{withCredentials: true})
}