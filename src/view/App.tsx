import React from 'react';
import {BrowserRouter, Routes, useRoutes} from "react-router-dom";
import routes from "./routes";

export default function () {
    const element = useRoutes(routes);
    return <BrowserRouter>
        <Routes>
            {element}
        </Routes>
    </BrowserRouter>;
}
