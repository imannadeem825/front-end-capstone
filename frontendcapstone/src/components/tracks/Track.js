import React, { useContext } from "react"
import { TrackContext } from "./TrackProvider"
import "./Track.css"


export const Track = ({track}) => {
  
  const { deleteTrack } = useContext(TrackContext)

  const handleDelete = () => {
    deleteTrack(track.id)
  }

  return (
    <section className="track">
      <h3 className="track__title">Track: {track.title}</h3>
      <div className="track__timeToComplete"> 
        <div className="timeToComplete__title">Time to Complete:</div>
        <div className="timeToComplete__text">{track.timeToComplete}</div>
      </div>
      <div className="track__isComplete"> 
        <div className="isComplete__title">Track Complete:</div>
        <div className="isComplete__text">{track.isComplete?.toString()}</div>
      </div>
      <button className="deleteTrack__button" onClick={handleDelete}>Delete Track</button>
    </section>
  )
}