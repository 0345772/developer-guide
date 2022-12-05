import { Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "./index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

export const App = () => {
    return (
        <div className="app">
            <Link to={"/main"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"main"} element={<MainPageAsync />} />
                <Route path={"about"} element={<AboutPageAsync />} />
            </Routes>
            </Suspense>
        </div>
    );
};
