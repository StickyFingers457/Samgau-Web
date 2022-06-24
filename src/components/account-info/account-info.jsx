import React from 'react'
import {Link} from 'react-router-dom'
import './account-info.css'


export const AccountInfo = () => {
  return (
    <div className='account-info'>
      <img className='imgBorder' src='/images/account-img.jpg' alt="She is dora" ></img>
      <p className='username'>username: <span>Dora</span> </p>
      <p className='email'>email: <span>mygoogleaccount@gmail.com</span> </p>
      <p>Total Bonus Points: <span>0 b.p.</span></p>
      <p>Не хватает b.p.? <br /> Иди <Link to="/tasks"><span>работать</span></Link></p>
    </div>
  )
}
