// features/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchToken = createAsyncThunk('auth/fetchToken', async () => {
  const response = await fetch('/api/token');
  const data = await response.json();
  return data.token;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    status: 'idle',
    error: null,
    name: null,
    id: null
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload;
        // set the token in a cookie
        document.cookie = `token=${action.payload}`;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;

  
