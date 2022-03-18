import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    program:[
    {
        id:1,
        name:'Basic ',
        price:50,
        img:'/img/man1.jpg',
        member:20,
        days:3
    },
    {
        id:2,
        name:'silver ',
        price:100,
        img:'/img/man2.jpg',
        member:30,
        days:5
    },
    {
        id:3,
        name:'gold ',
        price:150,
        img:'/img/man3.jpg',
        member:5,
        days:'evre day'
    }
]}

export const programSlice = createSlice({
    name:'programs',
    initialState,
    reducers:{
        addProgram : (state, action) =>{
            state.program.push(action.payload)
        },
        deleteProgram:(state,action)=>{
            state.program = state.program.filter(item => item.id != action.payload)
        },
        updateProgram:(state,action)=>{
            state.program[action.payload.id - 1] = action.payload
        }
    }
})

export const {addProgram,deleteProgram,updateProgram} = programSlice.actions
export default programSlice.reducer