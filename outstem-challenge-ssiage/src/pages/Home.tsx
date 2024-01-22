import React, { useEffect } from "react";
import { useState } from 'react';
import { Navbar } from "../components/Navbar/Navbar";
import { LandingPage } from "../components/HomeSections/LandingPage";
import { PieSection } from "../components/HomeSections/PieSection";
import { BarSection } from "../components/HomeSections/BarSection";
import { RevenueSection } from "../components/HomeSections/RevenueSection";
import { LineSection } from "../components/HomeSections/LineSection";

export const Home = () => {
    const currTheme = localStorage.getItem('currTheme')
    const [theme, setTheme] = useState(currTheme? currTheme : 'light');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        localStorage.setItem('currTheme', theme)
    }, [theme])

    return (
        <div >
            <Navbar theme={theme} setTheme={setTheme} date={date} dateChange={setDate}/>
            <LandingPage theme={theme}/>
            <PieSection date={date} theme={theme}/>
            <BarSection theme={theme}/>
            <RevenueSection theme={theme}/>
            <LineSection theme = {theme}/>
        </div>
    )
}