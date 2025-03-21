"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface alertState {
    message: string,
    type: "success" | "danger" | "warning" | "info" | null
}

const initialState: alertState = {
    message: "",
    type: null,
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, action: PayloadAction<{ message: string; type: alertState["type"] }>) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        hideAlert: (state) => {
            state.message = '';
            state.type = null;
        },
    }
})

export const {showAlert, hideAlert} = alertSlice.actions;
export default alertSlice.reducer;