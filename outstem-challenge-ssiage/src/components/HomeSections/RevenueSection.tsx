import React from "react";
import { Revenue } from "../Revenue";
import { Button } from "@mui/material";
import './RevenueSection.css'

interface RevenueSectionProps {
    theme: string
}
export const RevenueSection = ({theme}: RevenueSectionProps) => {
    const scrollToElement = (elementId: string) => {
        const targetElement = document.getElementById(elementId);
    
        if (targetElement) {
          // Using smooth scroll behavior for a smoother transition
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className="line-section" id="goal3">
            <div className={`line-subsection revexplanation-${theme}`}>
                <div className="ms-5">
                    <h1 className="d-flex justify-content-center"><b className="goal">Goal 3</b></h1>
                    <h1> <br/>Dough Stacks and Pizza Tracks: Total 'Pizzanomics' Unveiled</h1>
                    <p className="description"> <br/>Add a display of the total money made in 2023 by computing the price of each pizza sold and adding them all.</p>
                    <div className="btn-div">
                        <Button onClick={() => {scrollToElement("goal4")}} size='large' variant="contained" className='btn'>continue to Goal 4</Button>
                    </div>
                </div>
            </div>
            <div className={`line-subsection linegraph-${theme}`}>
                <div className={`mb-3`}>
                    <Revenue/>
                </div>
            </div>
        </div>
    )
}