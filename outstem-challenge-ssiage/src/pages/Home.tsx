import React from "react";
import { Pie } from "../components/Pie";
import { Bar } from "../components/Bar";
import { Line } from "../components/Line";

export const Home = () => {
    return (
        <div className="div">
            <Pie/>
            <Bar/>
            <Line/>
        </div>
    )
}