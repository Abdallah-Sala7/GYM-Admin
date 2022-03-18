import { configureStore } from "@reduxjs/toolkit";
import programSlice from "./programSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer:{
        users:userSlice,
        programs : programSlice
    }
})