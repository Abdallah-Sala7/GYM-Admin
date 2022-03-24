import { NavLink } from 'react-router-dom'
import {Apps, Home, PersonOutline} from '@mui/icons-material'
import './Aside.css'
import { useSelector } from 'react-redux'

function Aside() {
    const {asideActive} = useSelector(state => state.toggle)
  return (
    <div className={`aside ${asideActive == true ? 'active':''}`}>
        <div className="main-minu">
            <NavLink to={'/'} className="minu-icon-name">
                <span className='aside-icon'>
                    <Home />
                </span>
                <span className="icon-span">
                    Home
                </span>
            </NavLink>
            <NavLink to={'/users'} className="minu-icon-name">
                <span className='aside-icon'>
                    <PersonOutline />                    
                </span>
                <span className="icon-span">
                    Users
                </span>
            </NavLink>
            <NavLink to={'/programs'} className="minu-icon-name">
                <span className='aside-icon'>
                    <Apps />                    
                </span>
                <span className="icon-span">
                    Programs
                </span>
            </NavLink>

        </div>
    </div>
  )
}

export default Aside