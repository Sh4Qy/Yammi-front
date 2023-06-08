import { Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Menu from "./Pages/Menu";
import './style.css'
import axios from "axios";
import { API_URL } from "./config";
import React from "react";

function App() {
  const [categories,setCategories] = React.useState([])

  React.useEffect(()=>axios.get(API_URL).then(response=>{
    setCategories(response.data)
  }),[])

  return (
    <div>
        <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/menu" element={<Menu categories={categories}/>}/>
        </Routes>
    </div>
  );
}

export default App;
