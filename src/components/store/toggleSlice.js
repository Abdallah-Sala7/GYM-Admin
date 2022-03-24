import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    asideActive : false,
    darkActive : true
}
export const toggleSlice = createSlice({
    name:'toggle',
    initialState,

    reducers:{
        toggleAside:(state)=>{
            state.asideActive = !state.asideActive
            console.log(state.aside);
        },
        toggleDark:(state) =>{
            state.darkActive = !state.darkActive
        }
    }
})

export const {toggleAside,toggleDark} = toggleSlice.actions
export default toggleSlice.reducer