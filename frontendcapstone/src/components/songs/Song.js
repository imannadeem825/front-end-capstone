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
        <h3 className="song__title">{song.title}</h3>
        <div className="song__lyricSummary">{song.lyricSummary}</div>
        <div className="song__startDate">{song.startDate}</div>
        <div className="song__completionDateGoal">{song.completionDateGoal}</div>
        <div className="song__progress">{song.progress}</div>
        <div className="song__productionGoals">{song.productionGoals}</div>
        <div className="song__cowriters">{song.cowriters}</div>
    </section>
)