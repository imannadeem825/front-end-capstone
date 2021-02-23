import React, { useContext } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"


export const User = ({user}) => {

  return (
    <section className="user">
      <h3 className="user__firstName">Welcome, {user.firstName}!</h3>
    </section>
  )
}