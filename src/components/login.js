import React, {useState} from 'react';
import './login.css';

const Login = () => {

    const [poupStyle, showPoup] = useState('hide')
    const poup = ()=> {
        showPoup('login-poup')
        setTimeout(()=>showPoup('hide'), 3000)
    }

    return (
        <div className='cover'>
            <h1>Login</h1>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />

            <div className='login__btn' onClick={poup}>LOGIN</div>

            <p className='text'>Our Login using</p>
            <div className='alt-login'>
                <div className='facebook'></div>
                <div className='instagram'></div>
            </div>

            <div className={poupStyle}>
                <h3>Login Fayled</h3>
                <p>Username or password incorrect</p>
            </div>


        </div>
    )
}

export default Login;