import React from 'react';
import Posts from "./pages/Posts";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import "./styles/App.css"
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="*" element={<Navigate to="/error"/>}/>
            </Routes>
        </BrowserRouter>
    )
        ;
};

export default App;