import React, { useContext } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"


export const User = ({user}) => {

  return (
    <section className="user">
      <h3 className="user__firstName">First Name: {user.firstName}</h3>
      <div className="user__lastName">Last Name: {track.lastName}</div>
      <div className="user__email">Email: {track.email?.toString()}</div>
    </section>
  )
}