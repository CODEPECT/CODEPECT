import React from "react";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import MainBasics from "./content/Basics/MainBasics";
import Layout from "./components/Layout";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/mainbasics" element={<MainBasics/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
