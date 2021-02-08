import React from "react"
import "./Demo.css"
import { Link } from "react-router-dom"


export const Demo = ({ demo }) => {
  return (
    <section className="demo">
      <h3 className="demo__title">
        <Link to={`/demos/detail/${demo.id}`}>
          { demo.song?.title }
        </Link>
      </h3>
      <div className="demo__startDate">Start Date: {demo.startDate}</div>
      <div className="demo__completionDateGoal">Completion Date Goal: {demo.completionDateGoal}</div>
  </section>
)}