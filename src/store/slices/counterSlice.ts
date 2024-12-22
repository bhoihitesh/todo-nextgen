import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'myslice',
    initialState: {
        count: 0,
        isSidebarOpen: true,
    },
    reducers: {
        increment:(state) => {
            state.count += 1;
        },
        decrement:(state) => {
            const {count} = state;
            if(count == 0) state.count = 1
            else state.count -= 1;
        },
        resetCount:(state)=>{
            state.count = 1;
        },
        handleSidebarToggle:(state)=>{
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})

export const { increment, decrement, resetCount, handleSidebarToggle } = counterSlice.actions;
export default counterSlice.reducer;