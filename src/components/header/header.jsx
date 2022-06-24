import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../cart-block'
import './header.css'

export const Header = () => {
  return (
    <div className='header'>
        <div className="wrapper">
            <Link to="/" className='header__site-title'>
                SAMGAU
            </Link>
        </div>
        <div className="wrapper">
            <div className="wrapper row-3"><Link to="/">Главная</Link></div>
            <div className="wrapper row-3"><Link to="/tasks">Задачи</Link></div>
            <div className="wrapper row-3"><Link to="/account">Мои покупки</Link></div>
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock />
            </div> 
        </div>
           
    </div>
  )
}
