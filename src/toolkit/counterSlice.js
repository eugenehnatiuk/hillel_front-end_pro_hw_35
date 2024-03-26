import { createSlice } from '@reduxjs/toolkit';

const INITIAL_VALUE = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    resetCount: () => {
      return {
        value: INITIAL_VALUE,
      };
    },
  },
});
export default counterSlice.reducer;

export const { increment, decrement, resetCount } = counterSlice.actions;
