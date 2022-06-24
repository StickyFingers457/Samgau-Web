import React from 'react'
import './banner.css'
import { Button } from "@mui/material"
import {
  Link
} from "react-router-dom";
import {Offer} from '../offer'
import { useHistory } from 'react-router-dom';


export const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner__info'>
                <h1>Выполняйте <span>Задачи</span> Зарабатывайте <span>Бонусы</span> Получайте <span>Подарки</span></h1>
                <p>Сайт самгау для сотрудников</p>
                <Button onClick={() => {window.location.href="/tasks"}} variant='outlined'>Задачи!</Button>
            </div>
            <div className="photo"> 
                <Offer/>
            </div>  
        </div>
      )
}
