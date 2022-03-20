import { Link } from 'react-router-dom';
import './User.css'
import { Add } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../store/userSlice';


function User() {

  const {user} = useSelector(state => state.users)
  const dispatch = useDispatch()

  return (
    <div className='container'>
    <div className="table-info">
      <h2>Users info</h2>
      <Link className="add-user" to={'add-user'}>
        <Add /> Add User
      </Link>        
    </div>

    <div className='table'>
      
      <table className="styled-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Program</th>
                <th>Action</th>

            </tr>
            
        </thead>
        <tbody>
          {user.map(item => <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <div className="name-flex">
                    <img src={item.img} alt="" />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td>
                  {item.email}
                </td>
                <td>
                  active
                </td>
                <td>
                  basics Program
                </td>
                <td>
                  <div className="button-flex">
                    <Link to={'info/'+item.id}>Edit</Link>
                    <span onClick={()=>dispatch(deleteUser(item.id))} >Delete</span>
                  </div>
                </td>

            </tr> )}
            
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default User