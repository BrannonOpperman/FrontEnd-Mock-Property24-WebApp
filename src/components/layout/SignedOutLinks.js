import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink className="grey-text" to='/register'>Register</NavLink></li>
            <li><NavLink className="grey-text" to='/login'>Log In</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks