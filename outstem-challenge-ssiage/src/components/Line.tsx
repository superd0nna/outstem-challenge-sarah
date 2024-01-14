import React from "react";
import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import orders from '../data/order_data.json'
import prices from '../data/pricing_data.json'

interface sortedData {
    month: string[]
    total: number[]
}

interface Item {
    type: string
    size: string
}

export const Line = () => {
    const init: sortedData = {
        month: [], total: []
    }

    const [convertedData, setConvertedData] = useState<sortedData>(init);
    useEffect(() => {
        const data = {}
        const convertedDataValue: sortedData = convertData(data);
        setConvertedData(convertedDataValue);
    }, [])

    const convertItemsToPrice = (data: Item[]): number => {
        let total_price: number = 0;
        for (const data_element of data) {
            total_price += prices[data_element.type][data_element.size]
           
        }
        return total_price;
    }

    const convertData = (data: object): sortedData => {
        let returnValue: sortedData = {
            'month': [], 'total': []
        }
        const monthlyLookup: Record<string, number> = {
            '01': 0,
            '02': 0,
            '03': 0,
            '04': 0,
            '05': 0,
            '06': 0,
            '07': 0,
            '08': 0,
            '09': 0,
            '10': 0,
            '11': 0,
            '12': 0
        }
        
        for(const i of orders) {
            const month = i.date.split('-')[1];
            monthlyLookup[month] += convertItemsToPrice(i.items);
        }

        // Iterate through your monthly lookup and split into two lists
        const keyValueArray: [string, number][] = Object.entries(monthlyLookup);

        // Sort the array based on keys
        keyValueArray.sort((a, b) => a[0].localeCompare(b[0]));

        for (const [key, value] of keyValueArray) {
            returnValue.month.push(key);
            returnValue.total.push(value);
        }
        return returnValue;
    }

    return (
        <div className="div">
            <LineChart
                xAxis={[{ data: convertedData.month }]}
                series={[{data: convertedData.total},]}
                width={500}
                height={300}
                />
        </div>
    )
}