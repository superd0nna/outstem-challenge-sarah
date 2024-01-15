import React from "react";
import './Navbar.css'
import logo_light from '../../assets/logo-white.png'
import logo_dark from '../../assets/logo-black.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'

interface ThemeProps {
    theme: string; // Assuming 'theme' is a string, you can adjust the type accordingly
    setTheme: (newTheme: string) => void;
  }

export const Navbar = ({theme, setTheme}: ThemeProps) => {
    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <div className={`navbar ${theme}`}>
            <img src={theme == 'light' ? logo_light : logo_dark} alt="" className="logo"/>
            <ul className="font-bold">
                <li>Home</li>
                <li>Menu</li>
                <li>Specials</li>
                <li>Contact</li>
            </ul>

            <img onClick={() => {toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className="toggle-icon"/>
        </div>
    )
}