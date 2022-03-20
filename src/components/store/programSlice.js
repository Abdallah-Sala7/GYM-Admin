import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    program:[
    {
        id:1,
        name:'Stretch & Yoga ',
        price:50,
        img:'/img/yoga.png',
        member:20,
        days:3
    },
    {
        id:2,
        name:'Cardio & Strength ',
        price:100,
        img:'/img/cardio.jpg',
        member:30,
        days:5
    },
    {
        id:3,
        name:'Muscle Building',
        price:150,
        img:'/img/stre.jpg',
        member:5,
        days:'evre day'
    }
],
    lastId:4    
}

export const programSlice = createSlice({
    name:'programs',
    initialState,
    reducers:{
        addProgram : (state, action) =>{
            state.program.push(action.payload)
            state.lastId += 1
        },
        deleteProgram:(state,action)=>{
            state.program = state.program.filter(item => item.id != action.payload)
        },
        updateProgram:(state,action)=>{
            state.program.map(item => {
                if (item.id == action.payload.id) {
                    item.name = action.payload.name
                    item.days = action.payload.days
                    item.price = action.payload.price
                    item.member = action.payload.member
                    item.img = action.payload.img
                }
            })
        }
    }
})

export const {addProgram,deleteProgram,updateProgram} = programSlice.actions
export default programSlice.reducer