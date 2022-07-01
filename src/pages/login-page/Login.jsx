import React, {useState} from 'react'
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { auth } from '../../components/firebase/firebase'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
 
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                 history('/account')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                    if (auth) {
                        history('/account');
                    }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='form  tv'>
        <form >
                {/* <Link to="/" >
                    <img className='header__logoAuthorization' src="https://samgau.com/images/logo/mainLogo_dark.png" alt="" />
                </Link> */}
                {/* <div className="samgau-logo">
                    <img src="images/samgau-logo.jpg" alt="samgau-logo" />
                </div> */}
                <div className="input-container">
                    <label className="textt"> E-mail: </label>
                    <input type="text" value={email} onChange=
                    {e => setEmail(e.target.value)} name="uname" placeholder="Email" required />
                    
                </div>
                <div className="input-container">
                    <label className="textt"> Пароль: </label>
                    <input type="password" value={password} onChange=
                    {e => setPassword(e.target.value)} name="pass" placeholder="Password" required />
                    
                </div>

                <div className="button-container">
                <Button type='submit' onClick={signIn}
                     className='login__signInButton'>Войти
                </Button>

                <Button onClick={register} 
                    className='login__registerButton'>
                        Создать Самгау Аккаунт
                </Button>
                </div>
                
            </form>
    </div>
  )
}

export default Login