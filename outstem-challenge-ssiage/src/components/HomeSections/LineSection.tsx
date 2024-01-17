import React from "react";
import { Line } from "../Line";
import { Button } from "@mui/material";
import './LineSection.css'

interface LineSectionProps {
    theme: string
}
export const LineSection = ({theme}: LineSectionProps) => {
    const scrollToElement = (elementId: string) => {
        const targetElement = document.getElementById(elementId);
    
        if (targetElement) {
          // Using smooth scroll behavior for a smoother transition
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className="line-section" id="goal4">
            <div className={`line-subsection lineexplanation-${theme}`}>
                <div className="ms-5">
                    <h1 className="d-flex justify-content-center"><b className="goal">Goal 4</b></h1>
                    <h1> <br/>Slice of Success: Charting the Cheesy Rise of Dough-lars!</h1>
                    <p className="description"> <br/>Create a line chart showing how much money was made per month in 2023.</p>
                    <div className="btn-div">
                        <Button onClick={() => {scrollToElement("landing")}} size='large' variant="contained" className='btn'>return home</Button>
                    </div>
                </div>
            </div>
            <div className={`line-subsection linegraph-${theme}`}>
                <div className={`mb-3`}>
                    <Line/>
                    <p className={`mt-3 figure-${theme}`}><b>Figure 3:</b> Line chart for the total revenue made for each month in 2023 at Slice of Pi.</p>
                </div>
            </div>
        </div>
    )
}