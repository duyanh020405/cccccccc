import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserLogin } from "../../services/user.service";
export const loginUser:any = createAsyncThunk("userLogin/loginUser", getUserLogin) 
const userReducer = createSlice({
    name:"users",
    initialState:{
        users:[],
        userLogin: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.userLogin = action.payload;
        })
    }
})
export default userReducer.reducer;