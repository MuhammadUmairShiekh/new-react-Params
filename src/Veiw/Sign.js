import { register } from "../config/firebase"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';




function Sign() {
    const [email, setEMail] = useState()
    const [password, setPassword] = useState()
    const [fname, setFName] = useState()
    const [lname, setLName] = useState()

    const signIn = () => {
        register(email, password, fname, lname)


    }

    return (
        <>

            <form>
                <p className="logo">SignUP</p>
                <input onChange={(e) => setFName(e.target.value)} type="text" value={fname} placeholder="Firts Name" autoComplete='off' />
                <input onChange={(e) => setLName(e.target.value)} type="text" value={lname} placeholder="Last Name" autoComplete='off' />
                <input onChange={(e) => setEMail(e.target.value)} type="email" value={email} placeholder="Email" required="" autoComplete='off' />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required="" autoComplete='off' />
                <button onClick={signIn} className="login">Sign-In</button>
                <NavLink to={"/"} className="login"> Login</NavLink>

            </form>

        </>
    )
}

export default Sign


