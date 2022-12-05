import { Suspense, useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';



export const App = () => {
  const {theme, toggleTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>theme</button>
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
