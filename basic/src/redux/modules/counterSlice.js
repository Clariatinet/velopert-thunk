import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const __increase = createAsyncThunk(
  // 첫번째 인자: action value
  'increase',
  // 두번째 인자: 콜백 함수
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(increase(payload));
    }, 1000);
  }
);

// initialState
const initialState = {
  number: 0,
};

// reducer
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.number = action.payload + 1;
    },
    decrease: (state, action) => {
      state.number = action.payload - 1;
    },
  },
});

// export action creators
export const { increase, decrease } = counterSlice.actions;

// export
export default counterSlice.reducer;
