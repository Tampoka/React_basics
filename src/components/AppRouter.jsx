import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route path={route.path} element={route.component} exact={route.exact}/>
            )}
            <Route path="*" element={<Navigate to="/posts"/>}/>
        </Routes>
    );
};

export default AppRouter;