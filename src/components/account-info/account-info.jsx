import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@mui/material"
import './account-info.css'
import {useStateValue} from '../../redux/user/StateProvider';
import { auth } from '../firebase/firebase';


export const AccountInfo = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useNavigate();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true">
      <div className='account-info'>
        <img className='imgBorder' src='/images/account-img.jpg' alt="She is dora" ></img>
        <p className='username'>username: <span>Dora</span> </p>
        <p className='email'>email: <span>{user.email}</span> </p>
        <p>Total Bonus Points: <span>0 b.p.</span></p>
        <p>Не хватает b.p.? <br /> Иди <Link to="/tasks"><span>работать</span></Link></p>
        <Link style={{ textDecoration: 'none' }} onClick={handleAuthentication} to={"/login"}>
          <Button onClick={() => history('/task')} variant='outlined'>
          Выйти из аккаунта</Button>
        </Link></div>
    </div>

  )
}
