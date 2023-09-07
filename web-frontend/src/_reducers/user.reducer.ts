import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
  value: number,
  name: string,
  sample_array: Object,
  sample_input: string
}

const initialState: userState = {
  value: 0,
  name: "Ruelito",
  sample_array: [
    {
      name: "Ruelito"
    },
    {
      name: "Stan"
    }
  ],
  sample_input: ""
}

export const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        sampleIncrement: (state, action) => {
            state.value += action.payload;
        },

        sampleChangeOhYeah: (state, action) => {
            state.sample_input = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { sampleIncrement, sampleChangeOhYeah } = userReducer.actions

export default userReducer.reducer