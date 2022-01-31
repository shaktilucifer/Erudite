import React from "react";
import App from "../App";
import {Route, Routes} from 'react-router-dom';
import BookSearchBar from "../BookSearchBar.tsx";
import ReadingChallenge from '../ReadingChallenge.tsx';

const APP_ROUTES =[
    {
        path: '/',
        key: 'HOME',
        exact: true,
        component: <BookSearchBar />
    }, 
    {
        path: '/reading-challenge',
        key: 'READING_CHALLENGE',
        exact: true,
        component: <ReadingChallenge />
    }
]

export default APP_ROUTES;

export function RouteRenderer({ appRoutes }) {
    return (
        <Routes>
            {appRoutes.map((route, index) => {
                return <Route key={route.key} 
                            path={route.path}
                            exact={route.exact}
                            element={route.component} />
                             
            })}
        </Routes>
    )
}