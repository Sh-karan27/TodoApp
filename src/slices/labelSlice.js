import { createSlice } from '@reduxjs/toolkit';

const labelSlice = createSlice({
  name: 'label',
  initialState: [],
  reducers: {
    addLabel: (state, action) => {
      state.push(action.payload);
      console.group(action.payload);
    },

    removeLabel: (state, action) => {
      state.filter((label) => {
        console.log(label.id !== action.payload);
        return label.id !== action.payload;
      });
    },
  },
});

export const { addLabel, removeLabel } = labelSlice.actions;
console.log(labelSlice.actions);
export default labelSlice.reducer;
