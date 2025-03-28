"use client";

// Get the auth object
export const getAuth = () => {
    return localStorage.getItem('auth');
}

// Set the auth object
export const setAuth=(payload: string)=>{
    return localStorage.setItem('auth', JSON.stringify(payload))
}

// Clear all data from localStorage
export const clearLocalStorage = () => {
    return localStorage.clear();
}