import React from 'react'
import Google from '../img/google.jpg'
import meta from '../img/meta.png'
import github from '../img/github.png'

const Login = () => {

    const google=()=>{
        window.open('http://localhost:4000/auth/google',"_self")
    }

    const github=()=>{
        window.open('http://localhost:4000/auth/github',"_self")
    }


    return (
        <div className='login'><h1 className="loginTitle">
            Choose the login method
        </h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton meta" >
                        <img src={meta} alt="" className="icon" />
                        Meta
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <img src={github} alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className='center'>
                    <div className="line"></div>
                    <div className="or">OR</div>

                </div>
                <div className="right">
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <button className='Submit'>Login</button>
                </div>
            </div>

        </div>
    )
}

export default Login