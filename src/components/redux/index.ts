import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Bug = {
  id: number;
  description: string;
  status: boolean;
};

const INITIAL_STATE: Bug[] = [{ id: 1, description: "Crash", status: true }];

const bugsSlice = createSlice({
  name: "bugs",
  initialState: INITIAL_STATE,
  reducers: {
    addBug(state, action) {
      state.push(action.payload);
    },
    toggleBug(
      state,
      action: PayloadAction<{ index: number; status: boolean }>
    ) {
      const bug = state[action.payload.index];
      bug.status = !action.payload.status;
    },
    removeBug(state, action) {
      return state.filter((bug, i) => i !== action.payload.index);
    },
  },
});

const { actions, reducer } = bugsSlice;

export const { addBug, toggleBug, removeBug } = actions;

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
