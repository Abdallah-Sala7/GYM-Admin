import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/userSlice'
import './NewUser.css'

function NewUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState('')
    const [adress, setAdress] = useState('')
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')

    const {user} = useSelector(state => state.users)
    const dispatch = useDispatch();

  return (
    <div className='new-user-container'>
        <h2>New User</h2>
        <div className='form' >
            <div className="form-one">
                <label htmlFor="user">Username</label>
                <input 
                    type="text" 
                    placeholder='user' 
                    id='user'
                    onChange={(e)=>setUserName(e.target.value)}
                />
                <label htmlFor="user-email">Email</label>
                <input 
                    type="email" 
                    id="user-email" 
                    placeholder='user@example.com'
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <label htmlFor="user-tel">Phone</label>
                <input 
                    type="tel" 
                    id="user-tel" 
                    placeholder='+201025077437' 
                    onChange={(e)=>setPhone(e.target.value)}
                />
                <div className="new-program-upload">
                    <input 
                        type="file" 
                        name="img-up" 
                        id="img-up" 
                        className="upload-img"
                        onChange={(e)=> setImg(e.target.value)}
                    />
                    <img src="/img/new-img.jpg" alt="" />
                </div>


            </div>
            <div className="form-one">
                <label htmlFor="full-name">Full Name</label>
                <input 
                    type="text" 
                    placeholder='Abdallah' 
                    id='full-name'
                    onChange={(e)=>setName(e.target.value)}
                />
                <label htmlFor="pass">Password</label>
                <input 
                    type="password" 
                    id="pass" 
                    placeholder='Password'
                />
                <label htmlFor="address">Address</label>
                <input 
                    type="tel" 
                    id="address" 
                    placeholder='Mansoura - Egypt' 
                    onChange={(e)=>setAdress(e.target.value)}
                />
            
                <div className="radio">
                    <input type="radio" id="Male" name='gender'/>
                    <label htmlFor="Male">Male</label>
                    <input type="radio" id="Female"  name='gender'/>
                    <label htmlFor="Female">Female</label>
                </div>
                <button 
                    onClick={()=>{img.length > 0 ?
                        dispatch(addUser({id:user.length+1,name,email,adress,userName,phone,img:"/img"+img.slice(11,)}))
                        : dispatch(addUser({id:user.length+1,name,email,adress,userName,phone,img:'/img/default-img.png'}))
                    }}
                >
                    Create
                </button>
            </div>
        </div>
    </div>
  )
}

export default NewUser