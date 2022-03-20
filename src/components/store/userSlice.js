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
    ],
    lastId:5
}
export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state, action)=>{
            state.user.push(action.payload)
            state.lastId += 1
        },
        deleteUser:(state,action)=>{
            state.user = state.user.filter(item => item.id != action.payload)
        },
        updateUser:(state,action)=>{
            state.user.map(item => {
                if (item.id == action.payload.id) {
                    item.name = action.payload.name
                    item.email = action.payload.email
                    item.phone = action.payload.phone
                    item.img = action.payload.img
                    item.adress = action.payload.adress
                }
            })
      }
    }
})

export const {addUser,deleteUser,updateUser} = userSlice.actions
export default userSlice.reducer