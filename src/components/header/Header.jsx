import "./Header.css"
import {DarkMode, LightModeOutlined, NotificationsNoneOutlined,} from '@mui/icons-material';
import CustomizedSwitches from "./switch";

function Header() {

  const addDarkMode = () =>{
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('.MuiSwitch-switchBase').classList.toggle('Mui-checked')
  }
  return (
    <div className="header">
        <h3 className="logo">GYM</h3>
        <input type="search" name="search" id="searchid" placeholder='search'/>
        <div className="header-box">
            <span onClick={addDarkMode} className="dark-span">
              <CustomizedSwitches />
            </span>
            <span className="noti"> <NotificationsNoneOutlined /> </span>
            <img src={"/img/admin.jpg"} />
            <span className="admin-name">Abdallah</span>
        </div>
    </div>
  )
}

export default Header