// import React from "react"
// import "./Song.css"
// import { Link } from "react-router-dom"


// export const Song = ({ song }) => {
//   return (
//     <section className="song">
//       <h3 className="song__name">
//         <Link to={`/songs/detail/${song.id}`}>
//           { song.name }
//         </Link>
//       </h3>
//       <div className="song__breed">{ song.breed }</div>
//   </section>
// )}

import React from "react"
import "./Song.css"

export const Song = ({ song }) => (
    <section className="song">
        <h3 className="song__title">Title: {song.title}</h3>
        <div className="song__lyricSummary">Lyric Summary: {song.lyricSummary}</div>
        <div className="song__startDate">Start Date: {song.startDate}</div>
        <div className="song__completionDateGoal">Completion Date Goal: {song.completionDateGoal}</div>
        <div className="song__progress">Progress: {song.progress}</div>
        <div className="song__productionGoals">Production Goals: {song.productionGoals}</div>
        <div className="song__cowriters">Co-writers: {song.cowriters}</div>
    </section>
)