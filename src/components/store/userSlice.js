import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[
        {
            name:'abdallah',
            id:1,
            email:'Abdallah@gmail.com',
            img:'/img/man1.jpg',
            date:'10-11-2000',
            phone:'01025077437',
            email:'abdallahsalah138@gmail.com',
            adress:'Mansoura - Egypt'
        },
        {
            name:'ahmed',
            id:2,
            email:'ahmed@gmail.com',
            img:'/img/man2.jpg',
            date:'10-11-2000',
            phone:'01025077437',
            email:'abdallahsalah138@gmail.com',
            adress:'Mansoura - Egypt'
        },
        {
            name:'mohamed',
            id:3,
            email:'mohamed@gmail.com',
            img:'/img/man3.jpg',
            date:'10-11-2000',
            phone:'01025077437',
            email:'abdallahsalah138@gmail.com',
            adress:'Mansoura - Egypt'
        },
        {
            name:'ali',
            id:4,
            email:'ali@gmail.com',
            img:'/img/man4.jpg',
            date:'10-11-2000',
            phone:'01025077437',
            email:'abdallahsalah138@gmail.com',
            adress:'Mansoura - Egypt'
        }
    ]
}
export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state, action)=>{
            state.user.push(action.payload)
        },
        deleteUser:(state,action)=>{
            state.user = state.user.filter(item => item.id != action.payload)
        },
        updateUser:(state,action)=>{
            state.user[action.payload.id - 1] = action.payload
        }
    }
})

export const {addUser,deleteUser,updateUser} = userSlice.actions
export default userSlice.reducer