import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
  value: number
}

const initialState: userState = {
  value: 0,
}

export const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        sampleIncrement: (state, action) => {
            state.value += action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { sampleIncrement } = userReducer.actions

export default userReducer.reducer