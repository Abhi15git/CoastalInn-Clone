import React from 'react'
import { Link } from 'react-router-dom'
import styles from "..//../Cssmodules/Navbar.module.css"
import classNames from 'classnames'

const Navbar = () => {
    const nav = classNames(styles.nav,"width-custom")
    return (
        <div className={nav}>
            <h1>CoastalInn</h1>
           <div>
           <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
           </div>
        </div>
    )
}

export default Navbar
