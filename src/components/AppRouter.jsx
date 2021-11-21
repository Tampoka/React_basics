import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.component} exact={route.exact} key={route.path}/>
                )}
                <Route path="*" element={<Navigate to="/posts"/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.component} exact={route.exact} key={route.path}/>
                )}
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
    );
};

export default AppRouter;