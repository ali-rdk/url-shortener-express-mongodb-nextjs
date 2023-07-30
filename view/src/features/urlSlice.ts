import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface urlState {
  originUrl: string;
  shortId: string;
}

const initialState: IterableIterator<urlState> = {
  values: [],
};

export const urlSlice = createSlice({
  name: "urlData",
  initialState,
  reducers: {
    setUrls: (state, action: PayloadAction<urlState[]>) => {
      state.values = action.payload;
    },
  },
});

export const { setUrls } = urlSlice.actions;

export default urlSlice.reducer;
