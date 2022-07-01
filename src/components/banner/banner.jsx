import React from 'react'
import './banner.css'
import { Button } from "@mui/material"
import {
    Link, useNavigate
} from "react-router-dom";
import { Offer } from '../offer'
/*import { useHistory } from 'react-router-dom';*/
//import Spline from '@splinetool/react-spline';



export const Banner = () => {
    const history = useNavigate();
    return (
        <div className='banner'>

            <div className='banner__info'>
                <div 
                    className='banner__info2'
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                >
                    <h1 className='banner-text'>Выполняйте <span className='red'>Задачи🎈</span> Зарабатывайте <span className='green'>Бонусы💸</span> Получайте <span className='blue'>Подарки💎</span></h1>
                    <h5 className='banner-text__little'>Сайт Samgau для сотрудников</h5>

                    
                    <Button onClick={() => history('/task')} variant='outlined'>Задачи!</Button>
                    
                </div>
                

            </div>

            <div className="banner__photo">
                <div
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                >
                    <Offer />
                </div>

            </div>
        </div>
    )
}
