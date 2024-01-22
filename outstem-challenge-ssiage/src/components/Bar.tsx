import React from "react";
import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts";
import { DataLookup, GraphData } from "./data";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";


export const Bar = () => {
    const init: GraphData = {"stores": [], "values": []};
    const [convertedData, setConvertedData] = useState<GraphData>(init);
    const [type, setType] = React.useState('');
    const [size, setSize] = React.useState('');


    const handleTypeChange = (event: SelectChangeEvent) => {
      setType(event.target.value as string);
    };

    const handleSizeChange = (event: SelectChangeEvent) => {
      setSize(event.target.value as string)
    };

    useEffect(() => {
        const data = {}
        const lookup: DataLookup = new DataLookup()
        const convertedDataValue: GraphData = lookup.convertBarData(size, type);
        setConvertedData(convertedDataValue);
    }, [size, type])


    return (
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pizza Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleTypeChange}
          >
            <MenuItem value={'Cheese'}>Cheese</MenuItem>
            <MenuItem value={'Pepperoni'}>Pepperoni</MenuItem>
            <MenuItem value={'Deluxe'}>Deluxe</MenuItem>
            <MenuItem value={'Hawaiian'}>Hawaiian</MenuItem>
            <MenuItem value={'Meatlovers'}>Meatlovers</MenuItem>
          </Select>
        </FormControl>
        <FormControl  fullWidth className="mt-3">
          <InputLabel id="demo-simple-select-label">Pizza Size</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Size"
            onChange={handleSizeChange}
          >
            <MenuItem value={'S'}>Small</MenuItem>
            <MenuItem value={'M'}>Medium</MenuItem>
            <MenuItem value={'L'}>Large</MenuItem>
          </Select>
        </FormControl>
        <BarChart
          xAxis={[{ scaleType: 'band', data: convertedData.stores }]}
          series={convertedData.values}
          width={650}
          height={400}
        />
      </div>
    )
}