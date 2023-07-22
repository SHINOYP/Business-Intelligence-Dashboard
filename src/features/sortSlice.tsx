import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Sort {
  number: number;
  key: any;
  name: string;
}

const initialState: Sort[] = [];

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<Sort>) => {
      return [...state, action.payload];
    },
    unselect: (state, action: PayloadAction<Sort>) => {
      const itemToRemoveKey = action.payload.key;
      if (itemToRemoveKey) {
        return state.filter((item) => item.key !== itemToRemoveKey);
      }
    },
  },
});

export const { select, unselect } = counterSlice.actions;

export default counterSlice.reducer;
