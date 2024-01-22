
import pizza from '../../assets/pizza.avif'
import { Button} from '@mui/material';
import { useEffect, useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import "./LandingPage.css";


interface ThemeProps { 
    theme : string
}

interface DatePickerValue  {
    startDate: object
    endDate: object
    key: string
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const LandingPage = ({theme}: ThemeProps) => {
    const [value, onChange] = useState<Value>([new Date(), new Date()]);

    let defaultRange: DatePickerValue = {
        'startDate': new Date(),
        'endDate': new Date(),
        'key': 'selection'
    }
    useEffect(()=>{
        console.log(new Date());
        console.log(typeof(new Date()))
    })

    const onDateChange = () => {
      }


    
    const scrollToElement = (elementId: string) => {
        const targetElement = document.getElementById(elementId);
    
        if (targetElement) {
          // Using smooth scroll behavior for a smoother transition
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
      

    return(   
        <div className={`landing landing-${theme}`} id='landing'>
            <div className='text-container'>
                <div className='subcontainer-text'>
                    <h1 className={`name-${theme}`}>A Slice of Pi</h1>
                    <h1 className={`slogan-${theme}`}>
                        People Disappoint, <br/> But Pizza Does Not. <br/>
                    </h1>
                    <div className="btn-div">
                        <Button onClick={() => {scrollToElement("goal1")}} size='large' variant="contained" className='btn'>Explore Goals</Button>
                    </div>
                </div>
                

      


    
            </div>
            <div className='image-container'>
                <img src={pizza} alt="" className="animate__animated animate__swing pizza-landing"/>
            </div>
        </div>
    )
}