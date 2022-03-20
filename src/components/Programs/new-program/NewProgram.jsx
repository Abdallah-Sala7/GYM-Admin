import {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProgram } from '../../store/programSlice'
import SelectAutoWidth from './days'
import './NewProgram.css'

function NewProgram() {

  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [days, setDays] = useState('')

  const dispatch = useDispatch()
  const {program,lastId} = useSelector(state => state.programs)

  const target = (el) =>{
    setDays(el)
  }

  return (
    <div className='new-program container'>
      <h2>New Program</h2>
      <div className="new-program-form">
        <label htmlFor="img">image</label> 
        <div className="new-program-upload">
          <input 
            type="file" 
            id="img" 
            onChange={(e)=>setImg(e.target.value)}
          /> 
          <img src="/img/new-img.jpg" alt="" />
        </div>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id='name' 
          placeholder='genral program' 
          onChange={(e)=>setName(e.target.value)}
        />

        <label htmlFor="Price">Price</label>
        <input 
          type="number" 
          id='Price' 
          placeholder='100$' 
          onChange={(e)=>setPrice(e.target.value)}
        />

        <label htmlFor="days">per week</label>
        <div className="days">
          <SelectAutoWidth  targetfu = {target} />
        </div>
        
        <button onClick={()=>{img.length > 0 ?
            dispatch(addProgram({id:lastId,name,price,days,img:"/img"+img.slice(11,)}))
            : dispatch(addProgram({id:lastId,name,price,days,img:'/img/default-img.png'}))
        }}
        >Create</button>
      </div>
    </div>
  )
}

export default NewProgram