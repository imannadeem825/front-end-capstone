import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Capstone Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/songs">Songs to Finish</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/demos">Demos to Produce</Link>
            </li>
        </ul>
    )
}