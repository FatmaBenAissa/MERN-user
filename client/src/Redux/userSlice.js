import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getuser = createAsyncThunk("user/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5001/user/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const adduser = createAsyncThunk("user/add", async (newuser) => {
  try {
    let result = axios.post("http://localhost:5001/user/add", newuser);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteuser = createAsyncThunk("user/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/user/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const edituser = createAsyncThunk("user/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5001/user/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  userList: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getuser.pending]: (state) => {
      state.status = "pending";
    },
    [getuser.fulfilled]: (state, action) => {
      state.status = "success";
      state.userList = action.payload.data.users;
    },
    [getuser.rejected]: (state) => {
      state.status = "fail";
    },
    [adduser.pending]: (state) => {
      state.status = "pending";
    },
    [adduser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [adduser.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteuser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteuser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteuser.rejected]: (state) => {
      state.status = "fail";
    },
    [edituser.pending]: (state) => {
      state.status = "pending";
    },
    [edituser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [edituser.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default userSlice.reducer;
