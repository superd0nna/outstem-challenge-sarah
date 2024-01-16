import React from "react";
import { Bar } from "../Bar";
import "./BarSection.css";
import './PieSection.css'
import { Card } from "react-bootstrap";

interface BarSectionProps {
    theme: string
}

export const BarSection = ({theme}: BarSectionProps) => {

    return (
        <div className="bar-section" id="goal2">
        </div>
    )
}