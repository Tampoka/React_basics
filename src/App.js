import React from 'react';
import Posts from "./pages/Posts";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import "./styles/App.css"

const App = () => {
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <Link to="/about">About</Link>
                    <Link to="/posts">Posts</Link>
                </div>
            </div>
            <Routes>
                <Route path="/about" element={<About/>}>
                </Route>
                <Route path="/posts" element={<Posts/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;