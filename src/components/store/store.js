import { configureStore } from "@reduxjs/toolkit";
import programSlice from "./programSlice";
import toggleSlice from "./toggleSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer:{
        users:userSlice,
        programs : programSlice,
        toggle:toggleSlice
    }
})