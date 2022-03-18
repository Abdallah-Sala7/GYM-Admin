import { Add } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProgram } from '../store/programSlice'

function Program() {

  const {program} = useSelector(state => state.programs)
  const dispatch = useDispatch()
  console.log(program);
  return (
    <>
    <div className="table-info">
        <h2>Programs info</h2>
        <Link className="add-user" to={'add-program'}>
          <Add /> Add Program
        </Link>
      </div>
    <div className='table'>
      <table className="styled-table">
      <thead>
          <tr>
              <th>ID</th>
              <th>Program</th>
              <th>Mebmber</th>
              <th>Price</th>
              <th>Day</th>
              <th>Action</th>
          </tr>
          
      </thead>
      <tbody>
        {program.map(item => <tr key={item.id} >
          <td>{item.id}</td>
          <td>
            <div className="name-flex">
              <img src={item.img} alt="" />
              <span>{item.name}</span>
            </div>
          </td>
          <td>
            {item.member}
          </td>
          <td>
            ${item.price}
          </td>
          <td>
            {item.days}
          </td>
          <td>
            <div className="button-flex">
              <Link to={'edit-program/'+1}>Edit</Link>
              <span onClick={()=>dispatch(deleteProgram(item.id))}>Delete</span>
            </div>
          </td>

      </tr>  )}

          
      </tbody>
      </table>
    </div>
    </>
  )
}

export default Program