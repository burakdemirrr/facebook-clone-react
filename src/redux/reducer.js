import { createSlice } from "@reduxjs/toolkit";


const slice=createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        }
    }
})

export const selectUser=((state)=>state.user.user)

export const {login,logout} =slice.actions;

export default slice.reducer;