import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice"
export const store = configureStore({
    reducer: {
        mycounter: counterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch