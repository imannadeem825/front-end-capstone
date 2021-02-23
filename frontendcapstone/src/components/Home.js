import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { User } from "./users/User"
import { UserContext } from "./users/UserProvider"
import SoundwaveGif  from "./images/soundwave.gif"
import LogoOne from "./images/capstone2.png"
import "./Home.css"

export const Home = () => {
    const history = useHistory()
    const { users, getUsers } = useContext(UserContext)
    const currentUser = parseInt(localStorage.getItem("capstone_user"))
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <>
		<div className="home__userDiv">                 
		    { 
				users.filter(u => u.id === currentUser).map(user => {
				return <User key={user.id} user={user} />
				})
			}
		</div>	
        <img className="background__image" src={SoundwaveGif} />	
        <img className="logo" src={LogoOne} />		
        </>
    )
}