import React from "react";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import MainBasics from "./content/Basics/MainBasics";
import Layout from "./components/Layout";
import MainTool from "./Tools/MainTool";
import MainTech from "./content/TechStack/MainTech";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/maintool" element={<MainTool/>}/>
        <Route path="/maintech" element={<MainTech/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
