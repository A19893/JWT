import React from "react";
import Signup from "./pages/Signup";
import Login from "./components/login";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
  <>
  <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
  </>
  )
};

export default App;
