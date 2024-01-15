import React from "react";
import {Pie} from "../Pie";
import "./PieSection.css";

interface PieSectionProps{
    theme: string
}

export const PieSection = ({theme}: PieSectionProps) => {
    return (
        <div className="pie-section" id="goal1">
            <div className="pie-subsection explanation">
                <div>
                    <h1>Problem A:</h1>
                </div>

            </div>
            <div className="pie-subsection graph">
                <Pie/>
            </div>
        </div>
    )
}