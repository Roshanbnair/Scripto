import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { user } from "../../const";
import axios from "axios";

const initialState = {
    user: [],
    isSuccess: false,
    isError: false,
    isLoading: false,
}

export const getUsers = createAsyncThunk('get-users', async () => {
    try {
        const response = await axios.get(`http://localhost:3000/users/getUsers`);
        return response.data;
    } catch (error) {
        throw Error(error.response.data.message);
    }
});

const userGet = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.isError = false
            state.user = action.payload;
        }).addCase(getUsers.pending, (state, action) => {
            state.isSuccess = false;
            state.isLoading = true
            state.isError = false
        }).addCase(getUsers.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isSuccess = false;
            state.isLoading = false
            state.isError = true
        })
    }
})

export default userGet.reducer