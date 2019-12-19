import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink className="grey-text" to='/'>Home</NavLink></li>
            <li><NavLink className="grey-text" to='/'>Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLinks