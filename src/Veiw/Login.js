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
                <input onChange={(e) => setEMail(e.target.value)} value={email} type="email" placeholder="Email" required="" autoComplete='off' />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required="" autoComplete='off' />
                <button type="submit" onClick={loginWeb} className="login">Log-In</button>
                <NavLink to={"#"}  >Forgot Password ?</NavLink>
                <hr />
                <NavLink to={"/sign"} className="create-account">Create New Account</NavLink>
            </form>

        </>
    )
}

export default Login


