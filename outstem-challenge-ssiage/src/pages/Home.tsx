import React, { useEffect } from "react";
import { useState } from 'react';
import { Navbar } from "../components/Navbar/Navbar";
import { LandingPage } from "../components/HomeSections/LandingPage";
import { Pie } from "../components/Pie";
import { PieSection } from "../components/HomeSections/PieSection";
import { Bar } from "../components/Bar";
import { Line } from "../components/Line";
import { Revenue } from "../components/Revenue";

export const Home = () => {
    const currTheme = localStorage.getItem('currTheme')
    const [theme, setTheme] = useState(currTheme? currTheme : 'light');

    useEffect(() => {
        localStorage.setItem('currTheme', theme)
    }, [theme])

    return (
        <div >
            <Navbar theme={theme} setTheme={setTheme}/>
            <LandingPage theme={theme}/>
            <PieSection theme={theme}/>
            <Bar/>
            <Line/>
            <Revenue/>
        </div>
    )
}