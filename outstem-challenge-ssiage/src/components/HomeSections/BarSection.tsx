import React from "react";
import { Bar } from "../Bar";
import { Button } from "@mui/material";
import "./BarSection.css"

interface BarSectionProps {
    theme: string
}

export const BarSection = ({theme}: BarSectionProps) => {

    const scrollToElement = (elementId: string) => {
        const targetElement = document.getElementById(elementId);
    
        if (targetElement) {
          // Using smooth scroll behavior for a smoother transition
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className="bar-section" id="goal2">
            <div className={`bar-subsection barexplanation-${theme}`}>
                <div className="ms-5">
                    <h1 className="d-flex justify-content-center"><b className="goal">Goal 2</b></h1>
                    <h1> <br/>Pizza Showdown: Charting the Cheesy Battles of 2023</h1>
                    <p className="description"> <br/>Add a simple bar chart showing how many orders were placed in each store (Kanata, Orleans... etc)</p>
                    <div className="btn-div">
                        <Button onClick={() => {scrollToElement("goal3")}} size='large' variant="contained" className='btn'>continue to Goal 3</Button>
                    </div>
                </div>
            </div>
            <div className={`bar-subsection graph-${theme}`}>
                <div className={`mb-3`}>
                    <Bar/>
                    <p className={`mt-3 figure-${theme}`}><b>Figure 2:</b> Bar chart with the number of orders that were placed in each restaurant in 2023.</p>
                </div>
            </div>
        </div>
    )
}