import React from "react";
import { useState, useEffect } from "react";
import orders from '../data/order_data.json'
import { DataLookup } from "./data";
import prices from '../data/pricing_data.json'

export const Revenue = () => {
    const [totalRevenue, setTotalRevenue] = useState<number>(0);
    useEffect(() => {
        const data = {}
        let lookup: DataLookup = new DataLookup();
        const dataValue = lookup.revenueData(data);
        setTotalRevenue(dataValue);
    }, [])

    return (
        <div className="div">
            <h1>{totalRevenue}</h1>
        </div>
    )
}