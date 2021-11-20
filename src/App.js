import React from 'react';
import Posts from "./pages/Posts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";

const App = () => {
    return (
        <BrowserRouter>
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