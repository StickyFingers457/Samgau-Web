import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../cart-block'
import './header.css'
import {useStateValue} from '../../redux/user/StateProvider';

export const Header = () => {
const [{ user }, dispatch] = useStateValue();

  return (
    <div className='header'>
        
            <Link style={{ textDecoration: 'none' }} to="/" >
                <img className='header__logo' src="/images/logo.png" alt="" />
            </Link>
        
            <div className="header__nav">
            
                <Link style={{ textDecoration: 'none' }} to="/">
                    <div className='header__option'>
                        <p className='header__optionLineOne'>
                        Главная
                        </p>
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/task">
                    <div className='header__option'>
                        <p className='header__optionLineOne'>
                        Задачи
                        </p>
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={!user && "/login" || user && "/account"} >
                    <div className='header__option'>
                        <p className='header__optionLineOne'>
                        {user ? 'Мои Покупки' : 'Войти'}
                        </p>
                    </div>
                </Link>

                <div className="header__cart">
                    <CartBlock />
                </div> 
                
            </div>
        </div>
           
  )
}
