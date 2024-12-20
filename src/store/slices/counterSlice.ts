import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'mycounter',
    initialState: {count: 0},
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
        }
    }
})

export const { increment, decrement, resetCount } = counterSlice.actions;
export default counterSlice.reducer;