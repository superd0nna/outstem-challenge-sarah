import orders from "../data/order_data.json" 
import prices from "../data/pricing_data.json";
import reviews from "../data/review_data.json";

export interface sortedData {
    month: string[]
    total: number[]
}

interface Item {
    type: string
    size: string
}

interface BarChartData {
    location: string
    value: number
    color: string
}

export interface GraphData {
    stores: string[]
    values: object[]
  }

interface PizzaOrder {
    order_id: number;
    store: string;
    items: PizzaItem[];
    date: string;
  }
  
interface PizzaItem {
    type: string;
    size: string;
}

export interface PieSectionProps{
    theme: string
}

export interface PieChartData  {
    label: string
    value: number
    color: string
}

export class DataLookup{ 
    // Assign the color of the pie chart slice based on the sentiment
    getColor = (sentiment: string): string => {
        let color: string;
        switch (sentiment) {
            case 'delighted':
                color = '#688974';
                break;
            case 'angry':
                color = '#ec5336';
                break;
            case 'happy':
                color = '#f9bc75';
                break;
            case 'sad':
                color = '#7695da'
                break;
            default:
                color = '#FFFFFF'
        }
        return color;
    }

    // Function that tallys up the sentiment occurences.
    sortPieData = (data: object): Record<string, number> => {
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

    convertPieData = (data: object): PieChartData[] => {
        const pieChartDataArr: PieChartData[] = [];
        const result: Record<string, number> = this.sortPieData(pieChartDataArr);

        for (const i of Object.keys(result)) {
            const pieChartItem: PieChartData = {
                label: i,
                value: result[i],
                color: this.getColor(i)
            };
            pieChartDataArr.push(pieChartItem)
        }
        return pieChartDataArr;
    }

    convertItemsToPrice = (data: Item[]): number => {
        let total_price: number = 0;
        for (const data_element of data) {
            total_price += prices[data_element.type][data_element.size]
        }
        return total_price;
    }

    convertData = (data: object): sortedData => {
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
            monthlyLookup[month] += this.convertItemsToPrice(i.items);
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

    revenueData = (data:object): number => {
        let monthlyRevenue = this.convertData(data);
        let total: number = 0;
        monthlyRevenue.total.forEach(element => { total+= element});
        return total
    }


    //bar graph
    sortBarData = (size: string, type: string): Record<string, number> => {
        const orderLookup: Record<string, number> = {
          "Kanata": 0,
          "Orleans": 0,
          "The Glebe": 0,
          "Sandy Hill": 0,
          "Downtown": 0,
        }
  
        for (const i of orders) {
          const order: PizzaOrder = i as PizzaOrder;
          for (const subitem of order.items){
            let item = subitem as PizzaItem;
            //console.log(item.type, item.size)
            if ((item.size === size || size === '') && (item.type === type || type === '')){
              orderLookup[i.store] += 1;
            }
          }
        }
        return orderLookup
      }
  
    convertBarData = (size: string, type: string): GraphData => {
          const barChartDataArr: BarChartData[] = [];
          const finalResult: GraphData = {"stores": [], "values": []}
          const result: Record<string, number> = this.sortBarData(size, type);
  
          for (const i of Object.keys(result)) {
              const pieChartItem: BarChartData = {
                  location: i,
                  value: result[i],
                  color: 'red'
              };
              barChartDataArr.push(pieChartItem)
          }
  
          let values: number[] = []
  
          for (const i of barChartDataArr) {
            finalResult.stores.push(i.location);
            values.push(i.value)
          }
          finalResult.values = [{
            "data": values
          }]
        return finalResult
      }

} 


 