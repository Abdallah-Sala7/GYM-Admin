import "./Header.css"
import { Menu, NotificationsNoneOutlined,} from '@mui/icons-material';
import CustomizedSwitches from "./switch";

function Header() {

  const addDarkMode = () =>{
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('.MuiSwitch-switchBase').classList.toggle('Mui-checked')
  }
  const asideActive = () => {
    document.querySelector('.aside').classList.toggle('active')
    document.querySelector('.main').classList.toggle('active')
  }

  return (
    <div className="header">
        <div className="menu-open" onClick={asideActive}><Menu /></div>
        <h2>GYM</h2>
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