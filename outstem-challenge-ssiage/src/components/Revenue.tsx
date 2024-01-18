import React from "react";
import { useState, useEffect } from "react";
import { DataLookup } from "./data";
import './Revenue.css'

export const Revenue = () => {
    const [totalRevenue, setTotalRevenue] = useState<number>(0);
    useEffect(() => {
        const data = {}
        let lookup: DataLookup = new DataLookup();
        const dataValue = lookup.revenueData(data);
        setTotalRevenue(dataValue);
    }, [])

    return (
        <div className="revenue">
            <h1>Total Revenue 2023 :</h1>
            <h1 className="total-rev">
            <span className="underlined underline-overflow">${totalRevenue}</span></h1>
        </div>
    )
}