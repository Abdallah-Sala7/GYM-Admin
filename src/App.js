import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from "./components/asidebar/Aside";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import EditProgram from "./components/Programs/edit-program/EditProgram";
import NewProgram from "./components/Programs/new-program/NewProgram";
import Program from "./components/Programs/Program";
import EditUser from "./components/user-info/EditUser";
import NewUser from "./components/users/NewUser";
import User from "./components/users/User";

function App() {

  const onLoadFun =()=>{
    setTimeout(()=>{
      document.querySelector('.loading').style.display = 'none'
      document.querySelector('body').style.overflow = "auto"
    },1500)
  }

  
  return (
    <>
    <div className="app">
      <BrowserRouter>
          <Header />
          <div className="main" onLoad={onLoadFun}>
              <Aside />
              <div className="over-lay"></div>
              <div className="loading">
              <div class="lds-roller">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              </div>
              </div>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programs" element={<Program /> } />
                <Route  path="/users" element={<User /> } />
                <Route path="users/add-user" element={<NewUser />} />
                <Route path="users/info/:id" element={<EditUser />} />
                <Route path="programs/add-program" element={<NewProgram />} />
                <Route path="programs/edit-program/:id" element={<EditProgram />} />
              </Routes>
        </div>
      </BrowserRouter>
      </div></>
  );
}

export default App;
