import React from 'react';
import { register } from "../config/firebase"
import { useState } from 'react';




function Sign() {
    const [email, setEMail] = useState("")
    const [password, setPassword] = useState("")
    const [fname, setFName] = useState("")
    const [lname, setLName] = useState("")

    const signIn = () => {
        register(email, password)
    }

    return (
        <>

            <form>
                <p className="logo">SignUP</p>
                <input onChange={e => setFName(e.target.value)} type="text" placeholder="Firts Name"  autoComplete='off' />
                <input onChange={e => setLName(e.target.value)} type="text" placeholder="Last Name"  autoComplete='off' />
                <input onChange={e => setEMail(e.target.value)} type="text" placeholder="Email" required="" autoComplete='off' />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required="" autoComplete='off' />
                <button onClick={signIn} className="login">Sign-In</button>

            </form>

        </>
    )
}

export default Sign


