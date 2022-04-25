import react from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";

const Mainroutes = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
       {/* keep all the routes here  */}
       <Route path='/Home' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Books' element={<Books/>}/>
       <Route path='/Login' element={<Login/>}/>
       {/* /books/* route need to be protected */}
      </Routes>
      </BrowserRouter>
    </>
  );
};
export default Mainroutes;
