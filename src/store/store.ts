"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice"
import alertSlice from "./slices/alertSlice";
export const store = configureStore({
    reducer: {
        myslice: counterSlice,
        alert: alertSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch