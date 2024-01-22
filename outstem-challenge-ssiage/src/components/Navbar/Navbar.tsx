import React, { useState } from "react";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import logo_light from '../../assets/logo-white.png'
import logo_dark from '../../assets/logo-black.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import './Navbar.css'

interface ThemeProps {
    theme: string; 
    setTheme: (newTheme: string) => void;
    date: Date
    dateChange: (newDate: Date) => void;
  }

export const Navbar = ({theme, setTheme, dateChange, date}: ThemeProps) => {
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    type ValuePiece = Date | null;

    type Value = ValuePiece | [ValuePiece, ValuePiece];
    const [value, onChange] = useState<Value>([new Date(), new Date()]);

    return (
        <div className={`navbar ${theme}`}>
            <img src={theme === 'light' ? logo_light : logo_dark} alt="logo" className="logo"/>
            <DateRangePicker className={'ms-4'} onChange={onChange} value={value}/>
            <ul className="font-bold">
                <li>Home</li>
                <li>Menu</li>
                <li>Specials</li>
                <li>Contact</li>
            </ul>
            <img onClick={() => {toggle_mode()}} src={theme === 'light' ? toggle_light : toggle_dark} alt="" className="toggle-icon"/>
        </div>
    )
}