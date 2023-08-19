import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Tasks {
  filter: string;
}

const initialState: Tasks = {
  filter: '',
};

export const tasksSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    saveFilterValue: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    saveTrigger: () => {
        
    }
  },
});

export const { saveFilterValue } = tasksSlice.actions;

export default tasksSlice.reducer;
