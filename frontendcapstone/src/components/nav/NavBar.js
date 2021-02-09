import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

    const history = useHistory()

    const handleLogOutBtn = () => {
        history.push("/login")
        localStorage.clear()
    }

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
            <button onClick={handleLogOutBtn} className="logOutBtn">Log Out</button>
        </ul>
    )
}



// import React from "react"
// import "./Header.css"
// import Pig from '../images/Pig.png'
// import {Link, useHistory} from 'react-router-dom'

// /* -------------------- To give all pages a uniform header -------------------- */

// export const HeaderCard = () => {

//     const history = useHistory()

//     const handleLogOutBtn = () => {
//         history.push(`/welcome`)
//         localStorage.clear()
//     }

//     return (
//         <>
//         <header>
//         <button onClick={handleLogOutBtn} className="logOutBtn">Log Out</button>
//             <h1 className="header">Find A Farmer</h1>
//             <h2 className="h2">Where will you plop your slop?</h2>
//             <div className="centerDefaultImg">
//                 <div className="emptySpace"></div>
//                 <img className="profileDefault" src={Pig} alt="default"></img>
//                 <div className="emptySpace"></div>
//             </div>
//         </header>
//         </>
//     )
// }