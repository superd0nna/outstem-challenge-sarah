import React from "react";
import {Pie} from "../Pie";
import { Button } from "@mui/material";
import "./PieSection.css";


interface PieSectionProps{
    theme: string
}

export const PieSection = ({theme}: PieSectionProps) => {
    const scrollToElement = (elementId: string) => {
        const targetElement = document.getElementById(elementId);
    
        if (targetElement) {
          // Using smooth scroll behavior for a smoother transition
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className="pie-section" id="goal1">
            <div className={`pie-subsection explanation-${theme}`}>
                <div className="left-txt">
                    <h1 className="d-flex justify-content-center"><b className="goal">Goal 1</b></h1>
                    <h1> <br/>From Ecstatic Slices to a Hint of Bittersweet Crust!</h1>
                    <p className="description"> <br/>Show a simple pie chart of the customer reviews, showing how many reviews of each sentiment (happy, sad, etc) A Slice of Pi received in 2023</p>
                    <div className="btn-div">
                        <Button onClick={() => {scrollToElement("goal2")}} size='large' variant="contained" className='btn'>continue to Goal 2</Button>
                    </div>
                </div>
            </div>
            <div className={`pie-subsection graph-${theme}`}>
                <div className={`pie-chart mb-3`}>
                    <Pie/>
                    <p className={`mt-3 figure-${theme}`}><b>Figure 1:</b> Pie chart containing the customer reviews for Slice of Pi for the year of 2023</p>
                </div>
            </div>
        </div>
    )
}