import React from "react";
import { Pie } from "../components/Pie";
import { Bar } from "../components/Bar";
import { Line } from "../components/Line";
import { Revenue } from "../components/Revenue";

export const Home = () => {
    return (
        <div className="div">
            <Pie/>
            <Bar/>
            <Line/>
            <Revenue/>
        </div>
    )
}