import React from "react";
import { PieChart } from '@mui/x-charts';
import { useEffect, useState } from "react";
import { DataLookup } from "./data";

interface PieChartData  {
    label: string
    value: number
    color: string
}


interface PieProps{
    date: Date
}

export const Pie = ({date}: PieProps) => {

    // Initialize the useState variables
    // Dynamically update the chart based on changes made to the data
    const [convertedData, setConvertedData] = useState<PieChartData[]>([]);

    // Fetch data after the component has rendered
    useEffect(() => {
        const data = {}
        const lookup: DataLookup = new DataLookup()
        const convertedDataValue: PieChartData[] = lookup.convertPieData(date);
        setConvertedData(convertedDataValue);
    }, [])

    return (
        <div className="PieChart" id="pie">
            <center>
                <div style={{width:"500px"}}> 
                    <PieChart series={[{
                        data: convertedData,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },]}
                    width={565}
                    height={400}/>
                </div>
            </center>
        </div>
        
    )
}