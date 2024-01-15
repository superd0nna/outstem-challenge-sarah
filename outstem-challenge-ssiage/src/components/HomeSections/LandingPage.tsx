import pizza from '../../assets/pizza.avif'
import { Button } from '@mui/material';

import "./LandingPage.css";
interface ThemeProps { 
    theme : string
}

export const LandingPage = ({theme}: ThemeProps) => {
    return(   
        <div className={`landing landing-${theme}`}>
            <div className='text-container'>
                <div className='subcontainer-text'>
                    <h1 className={`name-${theme}`}>A Slice of Pi</h1>
                    <h1 className={`slogan-${theme}`}>
                        People Disappoint, <br/> But Pizza Does Not. <br/>
                    </h1>
                    <div className="btn-div">
                        <Button onClick={() => {alert('clicked');}} size='large' variant="contained" className='btn'>Learn More</Button>
                    </div>
                </div>

            </div>
            <div className='image-container'>
                <img src={pizza} alt="" className="animate__animated animate__swing pizza-landing"/>
            </div>
        </div>
    )
}