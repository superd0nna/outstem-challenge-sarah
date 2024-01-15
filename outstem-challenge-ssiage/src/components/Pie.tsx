import React from "react";
import { PieChart } from '@mui/x-charts';
import { useEffect, useState } from "react";
import reviews from "../data/review_data.json"

interface PieChartData  {
    label: string
    value: number
    color: string
}

export const Pie = () => {

    // Initialize the useState variables
    // Dynamically update the chart based on changes made to the data
    const [convertedData, setConvertedData] = useState<PieChartData[]>([]);

    // Fetch data after the component has rendered
    useEffect(() => {
        const data = {}
        const convertedDataValue: PieChartData[] = convertData(data);
        setConvertedData(convertedDataValue);
    }, [])
    
    // Assign the color of the pie chart slice based on the sentiment
    const getColor = (sentiment: string): string => {
        let color: string;
        switch (sentiment) {
            case 'delighted':
                color = '#C6F2AF';
                break;
            case 'angry':
                color = '#F4BCC7';
                break;
            case 'happy':
                color = '#FFF0BD';
                break;
            case 'sad':
                color = '#87CEEB'
                break;
            default:
                color = '#FFFFFF'
        }
        return color;
    }

    // Function that tallys up the sentiment occurences.
    const sortData = (data: object): Record<string, number> => {
        const sentimentLookup: Record<string, number> = {
            "happy": 0,
            "angry": 0,
            "sad": 0,
            "delighted": 0
        };
        // Search dictionary key (sentiment), increment occurences. 
        for (const i of reviews) {
            sentimentLookup[i.sentiment] += 1;
        }
        return sentimentLookup;
    }

    const convertData = (data: object): PieChartData[] => {
        const pieChartDataArr: PieChartData[] = [];
        const result: Record<string, number> = sortData(pieChartDataArr);

        for (const i of Object.keys(result)) {
            const pieChartItem: PieChartData = {
                label: i.toUpperCase(),
                value: result[i],
                color: getColor(i)
            };
            pieChartDataArr.push(pieChartItem)
        }
        return pieChartDataArr;
    }

    return (
        <div className="PieChart" id="pie">
            <center>
                <div style={{width:"300px"}}> 
                    <PieChart series={[{
                        data: convertedData,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },]}
                    width={400}
                    height={200}/>
                </div>
            </center>
        </div>
        
    )
}