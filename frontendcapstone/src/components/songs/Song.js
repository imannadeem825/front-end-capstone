import React from "react"
import { Link } from "react-router-dom"
import "./Song.css"


export const Song = ({ song }) => {
  return (
    <section className="song">
      <h3 className="song__title">
        <Link to={`/songs/detail/${song.id}`}>
          { song.title }
        </Link>
      </h3>
      <div className="song__startDate">Start Date: {song.startDate}</div>
      <div className="song__completionDateGoal">Completion Date Goal: {song.completionDateGoal}</div>
  </section>
)}
