import React from "react";
import { useEffect, useState } from "react";
import orders from '../data/order_data.json'
import { BarChart } from "@mui/x-charts";


interface BarChartData {
    location: string
    value: number
    color: string
}

interface GraphData {
  stores: string[]
  values: object[]
}

export const Bar = () => {
    const init: GraphData = {"stores": [], "values": []};
    const [convertedData, setConvertedData] = useState<GraphData>(init);
    useEffect(() => {
        const data = {}
        const convertedDataValue: GraphData = convertData(data);
        setConvertedData(convertedDataValue);
    }, [])

    const sortData = (data: object): Record<string, number> => {
      const orderLookup: Record<string, number> = {
        "Kanata": 0,
        "Orleans": 0,
        "The Glebe": 0,
        "Sandy Hill": 0,
        "Downtown": 0,
      }

      for (const i of orders) {
          orderLookup[i.store] += i.items.length;
      }
      return orderLookup
    }

    const convertData = (data: object): GraphData => {
        const barChartDataArr: BarChartData[] = [];
        const finalResult: GraphData = {"stores": [], "values": []}
        const result: Record<string, number> = sortData(barChartDataArr);

        for (const i of Object.keys(result)) {
            const pieChartItem: BarChartData = {
                location: i,
                value: result[i],
                color: 'red'
            };
            barChartDataArr.push(pieChartItem)
        }

        let values: number[] = []
        let finalData: object = {"data": []}

        for (const i of barChartDataArr) {
          finalResult.stores.push(i.location);
          values.push(i.value)
        }
        finalResult.values = [{
          "data": values
        }]
      return finalResult
    }


    return (
      <div>
        <BarChart
          xAxis={[{ scaleType: 'band', data: convertedData.stores }]}
          series={convertedData.values}
          width={650}
          height={300}
        />
      </div>
    )
}