import { AddLocationAltOutlined, DateRangeOutlined, EmailOutlined, PersonOutline, Phone } from '@mui/icons-material'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { updateUser } from '../store/userSlice';
import './EditUser.css'

function EditUser() {
  const params = useParams();
  const {user} = useSelector(state => state.users)
  const dispatch = useDispatch()
  const userId = user[params.id - 1]

  const [name, setName ] = useState(userId.name)
  const [date, setDate ] = useState(userId.date)
  const [email, setEmail ] = useState(userId.email)
  const [phone, setPhone ] = useState(userId.phone)
  const [adress, setAdress ] = useState(userId.adress)
  const [img, setImg ] = useState(userId.img)


  console.log(img);

  return (
    <div className='edit-user container'>
        <h2>Edit User</h2>
        <div className="edit-container">
          <div className="user-info">
            <div className="info-box">
              <img src={userId.img} />
              <div className="info-name">
                <h4>{userId.name}</h4>
                <p>Software Engineer</p>
              </div>
            </div>
            <p>Account Details</p>
            <div className="details">
              <p>
                <PersonOutline />
                {userId.name}
              </p>
              <p>
                <DateRangeOutlined />
                {userId.date}
              </p>
            </div>
            <p>Contact Details</p>
            <div className="details">
            <p>
              <Phone />
              {userId.phone}
            </p>
            <p>
              <EmailOutlined />
              {userId.email}
            </p>
            <p>
              <AddLocationAltOutlined />
              {userId.adress}
            </p>
            </div>
          </div>
          <div className="edit-box">
            <h4>Edit</h4>
            <div className="flex-edit">
              <div className="edit-form">

                <label htmlFor="username">Username</label>
                <input 
                  type="text" 
                  defaultValue={userId.name} 
                  id="username"
                  onChange={(e)=>setName(e.target.value)} 
                />

                <label htmlFor="Full Name">Full Name</label>
                <input 
                  type="text" 
                  defaultValue={userId.name} 
                  id="Full Name" 
                />

                <label htmlFor="Email">Email</label>
                <input 
                  type="text" 
                  defaultValue={userId.email} 
                  id="Email" 
                  onChange={(e)=>setEmail(e.target.value)}
                  
                />

                <label htmlFor="Phone">Phone</label>
                <input 
                  type="text" 
                  defaultValue={userId.phone} 
                  id="Phone"
                  onChange={(e)=>setPhone(e.target.value)} 
                />

                <label htmlFor="Address">Address</label>
                <input 
                  type="text" 
                  defaultValue={userId.adress} 
                  id="Address" 
                  onChange={(e)=>setAdress(e.target.value)}
                />

              </div>
              <div className="edit-upload">
                <div className="uploaud-img">
                  <input type="file" onChange={(e)=>setImg("/img"+e.target.value.slice(11,))} />
                  <img src={userId.img} alt="" />
                </div>
                <button onClick={()=> 
                  dispatch(updateUser({id:userId.id,name,adress,email,date,phone,img}))}
                  >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EditUser