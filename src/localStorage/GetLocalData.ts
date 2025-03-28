"use client";

// Get the auth object
export const getAuth = () => {
    if (typeof window === "undefined") {
        return null; // Prevents error during SSR
      }
    return localStorage.getItem('auth');
}

// Set the auth object
export const setAuth=(payload: string)=>{
    if (typeof window === "undefined") {
        return null; // Prevents error during SSR
      }
    return localStorage.setItem('auth', JSON.stringify(payload))
}

// Clear all data from localStorage
export const clearLocalStorage = () => {
    if (typeof window === "undefined") {
        return null; // Prevents error during SSR
      }
    return localStorage.clear();
}