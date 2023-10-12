import React from 'react';
import { NavLink } from 'react-router-dom';
import { logIN } from "../config/firebase"
import { useState } from 'react';


function Login() {
    const [email, setEMail] = useState("")
    const [password, setPassword] = useState("")

    const loginWeb = () => {
        logIN(email, password)
    }
    return (
        <>

            <form>
                <p className="logo">Login</p>
                <input onChange={e => setEMail(e.target.value)} type="text" placeholder="Email" required="" autoComplete='off' />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required="" autoComplete='off' />
                <button onClick={loginWeb} className="login">Log-In</button>
                <NavLink to={"#"}  >Forgot Password ?</NavLink>
                <hr />
                <NavLink to={"/sign"} className="create-account">Create New Account</NavLink>
            </form>

        </>
    )
}

export default Login


