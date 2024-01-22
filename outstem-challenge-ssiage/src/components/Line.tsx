import React from "react";
import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { DataLookup, sortedData } from "./data";


export const Line = () => {
    const init: sortedData = {
        month: [], total: []
    }
    const [convertedData, setConvertedData] = useState<sortedData>(init);
    
    useEffect(() => {
        const data = {}
        const lookup: DataLookup = new DataLookup()
        const convertedDataValue: sortedData = lookup.convertData(data);
        setConvertedData(convertedDataValue);
    }, [])

    return (
        <div className="div">
            <LineChart
                xAxis={[{ data: convertedData.month }]}
                series={[{data: convertedData.total},]}
                width={650}
                height={400}
                />
        </div>
    )
}