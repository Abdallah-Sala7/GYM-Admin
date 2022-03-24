import "./Header.css"
import { Menu, NotificationsNoneOutlined,} from '@mui/icons-material';
import { toggleAside,toggleDark } from "../store/toggleSlice";
import { useDispatch } from "react-redux";
import CustomizedSwitches from "./switch";

function Header() {
  const dispatch = useDispatch()

  return (
    <div className="header">
        <div className="menu-open" onClick={()=> dispatch(toggleAside())}><Menu /></div>
        <h2>GYM</h2>
        <input type="search" name="search" id="searchid" placeholder='search'/>
        <div className="header-box">
          <div className="toggle-mode">
            <CustomizedSwitches />
          </div>
          <span className="noti"> <NotificationsNoneOutlined /> </span>
          <img src={"/img/admin.jpg"} alt="admin" />
          <span className="admin-name"><a href="https://abdallah-salah.netlify.app/">Abdallah</a></span>
        </div>
    </div>
  )
}

export default Header