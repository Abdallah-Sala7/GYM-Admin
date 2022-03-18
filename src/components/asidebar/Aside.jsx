import { NavLink } from 'react-router-dom'
import {Apps, Home, MenuOpen, PersonOutline} from '@mui/icons-material'
import './Aside.css'

function Aside() {

    const asideActive = () => {
        document.querySelector('.aside').classList.toggle('active')
        document.querySelector('.open-minu').classList.toggle('active')
        document.querySelector('.main').classList.toggle('active')
    }
  return (
    <div className='aside'>
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
        <div className="open-minu" onClick={()=>asideActive()}>
            <span className="aside-icon">
                <MenuOpen />
            </span>
        </div>
    </div>
  )
}

export default Aside