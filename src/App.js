import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from "./components/asidebar/Aside";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import EditProgram from "./components/Programs/edit-program/EditProgram";
import NewProgram from "./components/Programs/new-program/NewProgram";
import Program from "./components/Programs/Program";
import { toggleAside } from "./components/store/toggleSlice";
import EditUser from "./components/user-info/EditUser";
import NewUser from "./components/users/NewUser";
import User from "./components/users/User";

function App() {
  const [loading, setLoading] = useState(true)
  const {asideActive,darkActive} = useSelector(state => state.toggle) 
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])
  
  return (
    <div className={`app ${darkActive ?'dark':'' }`} >
      <BrowserRouter>
          <Header />
          {
            loading ? 
              <div className="loading">
              <div class="lds-roller">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              </div>
              </div> :
            <div className={`main ${asideActive ? "active":'' }`} >
              <Aside />
              <div className="over-lay" onClick={()=> dispatch(toggleAside())}></div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programs" element={<Program /> } />
                <Route path="/users" element={<User /> } />
                <Route path="users/add-user" element={<NewUser />} />
                <Route path="users/info/:id" element={<EditUser />} />
                <Route path="programs/add-program" element={<NewProgram />} />
                <Route path="programs/edit-program/:id" element={<EditProgram />} />
              </Routes>
            </div>              
          }



      </BrowserRouter>
      </div>
  );
}

export default App;
